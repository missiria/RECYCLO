import { useState, useEffect, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from "~/api/client";
import { API_URL } from "~/api/constants";
import { useRef } from "react";

export function currencyFormat(n) {
  const formatter = new Intl.NumberFormat(undefined, {
    currency: "MAD",
    style: "currency",
  });

  if (isNaN(n)) {
    return formatter.format(0);
  }
  return formatter.format(n);
}

// * get current user
export function useLoggedInUser(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function () {
      setLoading(true)
      const user = await getData('user');
      setUser(user);
      setLoading(true)
    })();
  }, [loading]);

  return { user, loading }
}

// * Add lazy param to control when the request should be triggered
export function useFetch(url, options, lazy){
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  
  const cache = useRef({})
  
  // * Memorize callback
  const trigger = useCallback(async (triggerUrl = url) => {
    const user = await getData('user');

    // * if the cache for that url exists
    // if(cache.current[triggerUrl]) {
    //   setData(cache.current[triggerUrl])
    //   return;
    // }
    setIsLoading(true)

    try {
      const response = await fetch(`${API_URL}${triggerUrl}`, {
        headers: {
          ...(user && { 'Authorization' : `${user?.auth?.type} ${user?.auth?.token}`}),
          "content-type": "application/json; charset=utf-8"
        },
        ...options,
      })
  
      const data = await response.json()
      if(response.ok) cache.current[triggerUrl] = data
      setData(data)
    } catch (err) {
      setError(err)
    }
    setIsLoading(false)
  }, [url, options])

  // * clear cache every 60 seconds (redux style)
  useEffect(() => {
    const id = setInterval(() => {
      cache.current = {}
      console.log("cache cleared");
    }, 1000 * 60)

    return () => clearInterval(id)
  }, [])
  
  useEffect(() => {
    if(!lazy){
      trigger(url)
    }
  }, [url, lazy])

  // * Force refetch when needed
  const refetch = async () =>  await trigger(url)

  return !lazy ? { data, isLoading, error, refetch } : [trigger, { data, isLoading,error, refetch }]
}

export const useAPI = (axiosParams,isAuth = false) => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    setIsLoading(true);
    try {
      if(isAuth == true)
      {
        const user = await getData('user');
        params.headers = {
          'Authorization' : user.auth.type+' '+user.auth.token
        };
      }
      const result = await apiClient.any(params);
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, error, isLoading, fetchData };
};

export const useAsyncStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState();

  async function getStoredItem(key, initialValue) {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(key, initialValue);
  }, [key, initialValue]);

  const setValue = async (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const storeData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
    return false;
  }
  return true;
}
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
    return null;
  }
}

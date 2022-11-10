import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from "~/api/client";
import { API_URL } from "~/api/constants";
import { useRef } from "react";

//axios.defaults.baseURL = API_URL;

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
  
  const cache = useRef({})
  console.log(cache);
  const trigger = async () => {
    const user = await getData('user');
    
    // * if the cache for that url exists
    if(cache.current[url]) {
      setData(cache.current[url])
      return;
    }
    setIsLoading(true)
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        ...(user && { 'Authorization' : `${user?.auth?.type} ${user?.auth?.token}`}),
        "content-type": "application/json; charset=utf-8"
      },
      ...options,
    })
    const data = await response.json()
    console.log(response.ok)
    if(response.ok) cache.current[url] = data
    setData(data)
    setIsLoading(false)
  }

  // * clear cache every 60 seconds (redux style)
  useEffect(() => {
    const id = setTimeout(() => {
      cache.current = {}
    }, 1000 * 60)

    return () => clearTimeout(id)
  }, [])
  
  useEffect(() => {
    if(!lazy){
      trigger()
    }
  }, [url, lazy])

  return !lazy ? { data, isLoading } : [trigger, { data, isLoading }]
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

  return { data, error, isLoading,fetchData };
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

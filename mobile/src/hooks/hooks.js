import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "~/api/constants";

axios.defaults.baseURL = API_URL;

export const useAxios = (axiosParams) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, error, loading };
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

import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '../../config';

axios.defaults.baseURL = API_URL;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [data, setData] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError | any>();
  const [loading, setLoading] = useState(true);

 const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch( err ) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

useEffect(() => {
  fetchData(axiosParams);
},[]);

 return { data, error, loading };
}

export default useAxios;
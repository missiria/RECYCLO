import { useEffect, useState} from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config';

const useAccounts = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        };
      try {
        const {data: response} = await axios.get(API_URL + '/accounts', config);
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useAccounts;
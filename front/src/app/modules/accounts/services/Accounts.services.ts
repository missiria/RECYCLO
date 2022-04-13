import { useState} from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config';
import { AccountType } from '../../../../Models/Account';

const useAccount = () => {
  const [loading, setLoading] = useState(false);

  const createAccount = (newAccount: AccountType) => {
    // to do : api POST
      const config = {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          }
      };

      setLoading(true);

      return axios.post(API_URL + '/accounts', newAccount , config).then((response) => {
        return response.data;
      }).catch((error) => {
        console.error(error)
      });

    setLoading(false);
  }

  const getAccountDetails = (clientId: Number) => {
    // todo : api GET
  }

  const getAccounts = () => {
    // todo : API GET ALL
      const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
      }
      setLoading(true);
      return axios.get(API_URL + '/accounts', config).then((response) => {
        setLoading(false);
        return response.data;
      }).catch(error => {
        console.error(error);
        setLoading(false);
        return error;
      });
  };

  return [
    {
      loading
    },
    {
      createAccount,
      getAccountDetails,
      getAccounts
    }
  ]
};

export default useAccount;
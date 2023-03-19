import apiClient from "~/api/client";

// TODO : create TU's
export const getTransactions = async (setTransactions) => {
  const response = await apiClient.get("payment/transactions");
  if (response.status === 200) {
    setTransactions(response.data);
  } else {
    return [];
  }
};

export const getBalance = async (setBalance) => {
  const response = await apiClient.get("wallet/balance");
  if (response.status === 200) {
    setBalance(response.data);
  } else {
    return [];
  }
};

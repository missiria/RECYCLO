import apiClient from "~/api/client";

// TODO : create TU's
export const getWithdrawals = async (setTransactions) => {
  const response = await apiClient.get("withdrawals");
  if (response.status === 200) {
    setTransactions(response.data);
  } else {
    return [];
  }
};

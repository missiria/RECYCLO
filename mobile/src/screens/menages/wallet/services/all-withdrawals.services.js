import apiClient from "~/api/client";

// TODO : create TU's
export const getWithdrawals = async (setWithdrawals) => {
  const response = await apiClient.get("withdrawals");
  if (response.status === 200) {
    setWithdrawals(response.data);
  } else {
    return [];
  }
};

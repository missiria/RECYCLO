import apiClient from "~/api/client";
import Config from "~/services/EKSNEKS.config";

export const getNotifications = async (setNotifications) => {
  apiClient.setHeader("Authorization", await Config.getToken());
  const response = await apiClient.get("notifications/all");

  console.log("response > ", response);

  if (response.status === 200) {
    setNotifications(response.data);
  } else {
    return [];
  }
};

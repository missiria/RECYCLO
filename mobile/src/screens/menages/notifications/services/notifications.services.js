import * as yup from "yup";
import apiClient from "~/api/client";
import { getData } from "../../../../hooks/hooks";

export const getNotifications = async (setNotifications) => {
  const user = await getData("user");
  const response = await apiClient.get("notifications/all", {
    headers: {
      Authorization: `${user.auth.type} ${user.auth.token}`,
    },
  });

  console.log("notifications/all > ", response);
  if (response.status === 200) {
    setNotifications(response.data);
  } else {
    return [];
  }
};

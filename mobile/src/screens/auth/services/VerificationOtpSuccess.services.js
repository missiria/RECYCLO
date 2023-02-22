import { getData } from "../../../hooks/hooks";

export const getCurrentUser = async (setUser) => {
  const currentUser = await getData("user");
  return setUser(currentUser);
};

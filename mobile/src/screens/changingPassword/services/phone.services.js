import * as yup from "yup";
import { axiosInstance } from "../../../api/client";

export const defaultValues = {
  email: "",
};

export const handleAuth = async ({ email }, navigation, ) => {
  await axiosInstance.post('forget_password', { email })

  if (email && navigation) {
    navigation.navigate("VerifyPhone", {
      name:"VerifyPhone",
      params: { email }
    });
  }
};

export const schemaValidation = yup.object().shape({
  // EDGE-1006_BUG_Authentication
  email: yup
    .string()
    .email()
    .required("Email is required")
});

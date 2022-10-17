import * as yup from "yup";
import { axiosInstance } from "../../../api/client";

export const defaultValues = {
  email: "",
};

export const handleAuth = async ({ email }, navigation, setLoading) => {
  setLoading(true)
  const { data } = await axiosInstance.post('forget_password', { email })

  setLoading(false)
  if (email && navigation && data) {
    navigation.navigate("VerifyPhone", {
     email, code: data?.code
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

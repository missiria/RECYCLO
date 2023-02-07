import * as yup from "yup";
import { axiosInstance } from "../../../api/client";

export const handleAuth = async (values, navigation, email, setLoading) => {
  try {
    const { data } = await axiosInstance.post("update_password", {
      email,
      password: values.password,
    });

    navigation.navigate("Done");
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export const defaultValues = {
  password: "",
  retypePassword: "",
};

export const schema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  retypePassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

import * as yup from "yup";
import { axiosInstance } from "../../../api/client";

export const defaultValues = {
  email: "",
};

export const VerifyPhone = async ({ email }, navigation, setLoading) => {
  try {
    setLoading(true);
    const { data } = await axiosInstance.post("forget_password", { email });

    if (!data) {
      throw new Error("No data was received from the server");
    }

    if (!data.code) {
      throw new Error("The response data is missing the code");
    }

    if (!email) {
      throw new Error("No email was provided");
    }

    if (!navigation) {
      throw new Error("No navigation object was provided");
    }

    navigation.navigate("VerifyPhone", {
      email,
      code: data.code,
    });
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export const schema = yup.object().shape({
  // EDGE-1006_BUG_Authentication
  email: yup.string().email().required("Email is required"),
});

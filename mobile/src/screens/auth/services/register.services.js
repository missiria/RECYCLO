import * as yup from "yup";
import "yup-phone";
import { axiosInstance } from "../../../api/client";
import { setErrorsAPI } from "../../../services/v12";

export const defaultValues = {
  first_name: "",
  last_name: "",
  phone: `05 ${Date.now().toString().substring(5)}`,
  email: `${Date.now()}@mail.com`,
  password: "123456789",
  type: "COLLECTOR",
};

export const handleRegister = async (
  userData,
  navigation,
  setErrors,
  setAuthLoaded
) => {
  setAuthLoaded(true);

  try {
    const response = await axiosInstance.post("users", userData, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });

    if (response.status !== 201) {
      throw new Error("Unexpected response status code");
    }

    navigation.navigate("VerificationUser", {
      email: response.data.email,
      code: response.data.code,
      account: response.data.account,
    });
  } catch (error) {
    if (error.response && error.response.status === 422) {
      setErrors(setErrorsAPI(error.response.data.errors));
    } else {
    // TODO : set Error in useState and show it in front
      console.log(error);
    }
  } finally {
    setAuthLoaded(false);
  }
};

export const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required").min(2).max(200),
  last_name: yup.string().required("Last Name is required").min(2).max(200),
  phone: yup
    .string()
    .optional()
    .phone("MA")
    .typeError("That doesn't look like a phone number"),
  email: yup.string().required().email().min(8).max(250), // TODO : verify email rules
  // TODO : https://stackoverflow.com/a/55604455
  password: yup.string().required().min(8).max(25),
});

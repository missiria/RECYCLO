import * as yup from "yup";
import apiClient from "~/api/client";
import { storeData } from "~/hooks/hooks";
import { axiosInstance } from "../../../api/client";
import { setErrorsAPI } from "../../../services/v12";
import "yup-phone";

export const defaultValues = {
  first_name: "firstname",
  last_name: "lastname",
  phone: "05" + Date.now().toString().substring(5),
  email: "test_" + Date.now() + "@gmail.com",
  password: "123456789",
  type: "COLLECTOR",
};

export const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required").min(2).max(200),
  last_name: yup.string().required("Last Name is required").min(2).max(200),
  // EDGE-1006_BUG_Authentication
  phone: yup
    .string()
    .optional()
    .phone("MA")
    .typeError("That doesn't look like a phone number"),
  email: yup.string().required().min(8).max(250), // TODO : verify email rules
  password: yup.string().required().min(8).max(25),
});

export const handleRegister = async (
  userData,
  navigation,
  setErrors,
  setAuthLoaded
) => {
  if (userData && navigation) {
    setAuthLoaded(true);
    const response = await axiosInstance.post("users", userData);

    if (response.status === 422) {
      setErrors(setErrorsAPI(response.data.errors));
    } else if (parseInt(response.data.id) > 0) {
      alert("Veuillez confirmer votre compte par email");

      // * Don't store the user object to prevent the user from logging in until they update there account
      // await storeData("user", response.data);

      // check if user is a collector
      if (userData.type === "COLLECTOR") {
        navigation.navigate("Address");
      } else {
        navigation.navigate("VerificationPhone");
      }
      setAuthLoaded(false);
    }
  }
};

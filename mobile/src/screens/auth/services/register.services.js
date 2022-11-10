import * as yup from "yup";
import "yup-phone";
import { storeData } from "~/hooks/hooks";
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
      navigation.navigate("VerificationUser", { email: response.data.email, code: response.data.code, account: response.data.account });
      setAuthLoaded(false);
    }
  }
};

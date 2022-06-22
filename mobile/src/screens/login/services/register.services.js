import * as yup from "yup";
import apiClient from "../../../api/client";
import { setErrorsAPI } from "../../../services/v12";
import { getData,storeData } from "../../../hooks/hooks";

export const defaultValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  password: "",
  type: "",
};

export const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required").min(2).max(200),
  last_name: yup.string().required("Last Name is required").min(2).max(200),
  phone: yup
    .number()
    .required("A phone number is required")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
  email: yup.string().required().min(8).max(250), // TODO : verify email rules
  password: yup.string().required().min(8).max(25),
});

export const handleRegister = async (userData, navigation, setErrors) => {
  if (userData && navigation) {
    const response = await apiClient.post("users", userData);
    if (response.status === 422) {
      setErrors( setErrorsAPI( response.data.errors ) );
    } else if (parseInt(response.data.id) > 0) {
      alert("Veuillez confirmer votre compte par email"); 

      await storeData('user',response.data);
      
      // cheack if user is a collector
      if (userData.type === "COLLECTOR") {
        navigation.navigate("Adress");
      } else {
        navigation.navigate("VerificationPhone");
      }
    }
  }
};

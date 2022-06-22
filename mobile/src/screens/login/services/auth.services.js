import * as yup from "yup";
import apiClient from "../../../api/client";

export const defaultValues = {
  phone: "0656560552",
  password: "c++",
};

// TODO : Authentication with server
export const handleAuth = async (userData, navigation, setErrors) => {
  if (userData && navigation) {
    const response = await apiClient.post("users/login", userData);

    if (response.status === 400 || response.status === 500) {
      setErrors({ api: response.data });
    } else if (parseInt(response.data.id) > 0 && response.status === 200) {
      if (response.data.active === 1) {
        if (response.data.type == "MENAGE") {
          navigation.navigate("Home");
        }
        else if (response.data.type == "COLLECTOR") {
          navigation.navigate("CollectorHome");
        } 
        alert("Vous étes bien connecté sur notre application");
      } else {
        setErrors({ api: "You need to activate your account" });
      }
    }
  }
};

export const schema = yup.object().shape({
  phone: yup
    .number()
    .required("A phone number is required")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
  password: yup.string().required().min(3).max(25),
});
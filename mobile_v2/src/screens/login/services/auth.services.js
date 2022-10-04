import * as yup from "yup";
import apiClient from "../../../api/client";

export const defaultValues = {
  email: "test@gm.com",
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
  navigation.navgate("Home")
};


export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email Address is required")
    .email("That doesn't look like a Email Address")
    .typeError(),
  password: yup.string().required().min(3).max(25),
});


export const handleAuthSubmit  = (values, navigation, setErrors) => {
  navigation.navigate("CollectorHome");
}
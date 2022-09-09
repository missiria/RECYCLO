import * as yup from "yup";
import apiClient from "~/api/client";
import { storeData } from "~/hooks/hooks";

export const defaultValues = {
  phone: "587242451",
  password: "123456789",
};

// TODO : Authentication with server
export const handleLogin = async (userData, navigation, setErrors, setAuthLoaded) => {
  if (userData && navigation) {
    setAuthLoaded(true);
    const response = await apiClient.post("users/login", userData);

    console.log('login.services > ', response.data);

    navigation.navigate("Home");

    if (response.status === 400 || response.status === 500) {
      setErrors({ api: response.data });
    } else if (parseInt(response.data.id) > 0 && response.status === 200) {
      if (response.data.active === 1) {

        await storeData('user',response.data);

        if (response.data.account.type == "MENAGE") {
        }
        else if (response.data.account.type == "COLLECTOR") {
          navigation.navigate("CollectorHome");
        }
        //alert("Vous étes bien connecté sur notre application");
      } else {
        setErrors({ api: "You need to activate your account" });
      }
    }

    setAuthLoaded(false);
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

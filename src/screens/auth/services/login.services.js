import * as yup from "yup";
import apiClient from "~/api/client";
import { storeData } from "~/hooks/hooks";
import "yup-phone";

export const defaultValues = {
  phone: "0656560550",
  password: "c++",
};

// TODO : Set error message if the server is down (500)
export const handleLogin = async (
  userData,
  navigation,
  setErrors,
  setAuthLoaded
) => {
  if (userData && navigation) {
    setAuthLoaded(true);
    const response = await apiClient.post("users/login", userData);

    console.log("response > ", response?.data);

    if (response.data.active === 0) {
      navigation.navigate("VerificationUser", {
        email: response.data.email,
        code: response.data.code,
      });
    } else if (response.status === 400 || response.status === 500) {
      setErrors({ api: response.data });
    } else if (parseInt(response.data.id) > 0 && response.status === 200) {
      if (response.data.active === 1) {
        await storeData("user", response.data);

        // TODO: it's a good idea to have a separate validator object: validator.isEmptyString(str), validator.isEmptyObject(obj), ....
        // EDGE-230316 : Auth validation with yup for address
        if (!response.data.account || response.data.account?.address === "") {
          return navigation.navigate("Address");
        }

        if (response.data.type == "MENAGE") {
          return navigation.navigate("MenageHome");
        } else if (response.data.type == "COLLECTOR") {
          return navigation.navigate("CollectorHome");
        } else {
          setErrors({ api: "ERROR : You should contact the support !" });
        }
      }
    }

    if (response.status === "ERR_DLOPEN_FAILED") {
      if (response.message) setErrors({ api: response.message });
    }

    setAuthLoaded(false);
  }
};

export const schema = yup.object().shape({
  phone: yup
    // EDGE-1006_BUG_Authentication
    .string()
    .optional()
    .phone("MA")
    .typeError("That doesn't look like a phone number"),
  password: yup.string().required().min(3).max(25),
});

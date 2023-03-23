import * as yup from "yup";
import { getData, storeData } from "../../../../../hooks/hooks";
import "yup-phone";

export const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  cin: "",
  birth_day: "",
  birth_month: "",
  birth_year: "",
  current_password: "",
  new_password: "",
  confirm_password: "",
};

// TODO : Authentication with server
export const handleUpdate = async (values, navigation, setErrors) => {
  // get auth data from AsyncStorage
  const user = await getData("user");
  // handle the case if getData returns null : no data found
  if (!user) return; // TODO: show snackbar error message saying: an internal error occured ...

  const updateResponse = await apiClient.put(`accounts/update`, values, {
    headers: { Authorization: `${user.auth.type} ${user.auth.token}` },
  });

  // handle response
  if (updateResponse?.status === 200) {
    // update user data in AsyncStorage
    if (updateResponse?.data) {
      let storeResponse = await storeData("user", data);
      /**
       * TODO: I will use another function called updateData
       * cuz the returned data from login contains the token
       * and the returned data from the update profile doesn't
       */
      if (!storeResponse) return; // TODO: show snackbar error message saying: an internal error occured ...
    }
    // navigate back to profile
    if (navigation) navigation.navigate("Profile");
  } else setErrors({ api: updateResponse?.data });
};

export const schemaValidation = yup.object().shape({
  first_name: yup.string().optional().min(4).max(30),
  last_name: yup.string().optional().min(4).max(30),
  email: yup.string().email("Must be a valid email").optional(),
  phone: yup
    .string()
    .notRequired()
    .nullable()
    .phone("MA", false, "That doesn't look like a phone number"),
  address: yup.string().optional(),
  city: yup.string().optional(),
  cin: yup.string().optional(),
  birth_day: yup.number().optional().max(30).min(1),
  birth_month: yup.number().optional().max(12).min(1),
  birth_year: yup.number().optional().max(2006),
  current_password: yup.string().optional().min(8).max(25),
  new_password: yup.string().min(8, "Your password is too short."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "Your passwords do not match."),
});

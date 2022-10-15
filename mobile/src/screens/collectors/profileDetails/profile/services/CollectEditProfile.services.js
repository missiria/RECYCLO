import * as yup from "yup";
import { axiosInstance } from "../../../../../api/client";
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
export const handleAuth = async (values, navigation) => {
  // * get the user
  const user = await getData("user");
  await axiosInstance.put(`accounts/update`, values, {
    headers: { Authorization: `${user.auth.type} ${user.auth.token}` },
  });

  // await storeData("user", data);
  if (values && navigation) {
    navigation.navigate("Profile");
  }
};

export const schemaValidation = yup.object().shape({
  first_name: yup.string().optional().min(4).max(30),
  last_name: yup.string().optional().min(4).max(30),
  email: yup.string().email("Must be a valid email").optional(),
  phone: yup
    .string()
    .notRequired().nullable()
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

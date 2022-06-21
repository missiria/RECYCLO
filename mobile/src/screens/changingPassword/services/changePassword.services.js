import * as yup from "yup";

export const handleAuth = (values, navigation) => {
  if (values && navigation) {
    navigation.navigate("Done");
  }
};

export const defaultValues = {
  password: "",
  retypePassword: "",
};

export const schema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  retypePassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

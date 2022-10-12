import * as yup from "yup";

export const defaultValues = {
  phone: "",
  countryCode: "212",
};

export const handleAuth = (values, navigation) => {
  if (values && navigation) {
    navigation.navigate("VerifyPhone");
  }
};

export const schemaValidation = yup.object().shape({
  phone: yup
    .number()
    .required("A phone number is required")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
  countryCode: yup.number().required().max(212),
});

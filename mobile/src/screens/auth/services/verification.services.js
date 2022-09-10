import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  n1: yup.number().required("Number 1 Is Requered"),
  n2: yup.number().required("Number 2 Is Requered"),
  n3: yup.number().required("Number 3 Is Requered"),
  n4: yup.number().required("Number 4 Is Requered"),
  n5: yup.number().required("Number 5 Is Requered"),
});

export const handleRegister = (values, navigation) => {
  if (values) {
    navigation.navigate("VerificationSuccess");
  }
};

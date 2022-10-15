import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  n1: yup.number().required("Number 1 Is Requered"),
  n2: yup.number().required("Number 2 Is Requered"),
  n3: yup.number().required("Number 3 Is Requered"),
  n4: yup.number().required("Number 4 Is Requered"),
});

export const handleRegister = (values, code, navigation) => {
  const currentCode = `${values.n1}${values.n2}${values.n3}${values.n4}`
  if ( code === parseInt( currentCode ) ) {
    navigation.navigate("VerificationSuccess");
  } else {
    // TODO : setErrors like login
    console.log("CODE DOESN'T MATCH !")
  }
};

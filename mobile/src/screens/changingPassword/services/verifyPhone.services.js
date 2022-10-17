import * as yup from "yup";

export const defaultValues = {
  n1: "",
  n2: "",
  n3: "",
  n4: "",
};

export const handleAuth = (values, navigation, code, setError, email) => {
  const currentCode = `${values.n1}${values.n2}${values.n3}${values.n4}`

  if (Number(currentCode) === code) {
    navigation.navigate("ChangePassword", {
      // * Send email
      email
    });
  } else {
    console.log("CODE DON'T MATCH");
  }
  setError("Code incorrect")
};

export const schemaValidation = yup.object().shape({
  n1: yup.number().required("Number 1 Is Required"),
  n2: yup.number().required("Number 2 Is Required"),
  n3: yup.number().required("Number 3 Is Required"),
  n4: yup.number().required("Number 4 Is Required"),
});

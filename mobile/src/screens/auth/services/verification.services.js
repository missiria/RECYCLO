import * as yup from "yup";
import apiClient from "~/api/client";
import { storeData } from "../../../hooks/hooks";

export const handleUserVerification = async (
  values,
  code,
  navigation,
  setErrors,
  email
) => {
  const currentCode = `${values.n1}${values.n2}${values.n3}${values.n4}`;
  console.log(`currentCode => ${ currentCode }`)
  console.log(`Code => ${ code }`)
  if (code == new Number(currentCode)) {
    try {
      // * Update active field
      const response = await apiClient.post("verify", { email });

      // * Save the user
      if (response.status === 200) {
        await storeData("user", response.data);
        navigation.navigate("VerificationSuccess");
      }
    } catch (error) {
      setErrors({api: "Error verification for this user"});
    }
  } else {
    // TODO : setErrors like login
    setErrors({code: "Code DOESN'T MATCH !"});
    console.log("CODE DOESN'T MATCH !");
  }
};

export const schemaValidation = yup.object().shape({
  n1: yup.number().required("Number 1 Is Requered"),
  n2: yup.number().required("Number 2 Is Requered"),
  n3: yup.number().required("Number 3 Is Requered"),
  n4: yup.number().required("Number 4 Is Requered"),
});

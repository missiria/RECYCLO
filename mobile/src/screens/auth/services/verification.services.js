import * as yup from "yup";
import { axiosInstance } from "../../../api/client";
import { storeData } from "../../../hooks/hooks";

export const schemaValidation = yup.object().shape({
  n1: yup.number().required("Number 1 Is Requered"),
  n2: yup.number().required("Number 2 Is Requered"),
  n3: yup.number().required("Number 3 Is Requered"),
  n4: yup.number().required("Number 4 Is Requered"),
});

export const handleRegister = async (values, code, navigation, setErr, email) => {
  const currentCode = `${values.n1}${values.n2}${values.n3}${values.n4}`

  if ( code == parseInt( currentCode ) ) {
    // * Update active field
    const { data: user } = await axiosInstance.post('verify', { email })

    // * Save the user
    await storeData('user', user)
    navigation.navigate("VerificationSuccess");
  } else {
    // TODO : setErrors like login
    setErr("Code DOESN'T MATCH !")
    console.log("CODE DOESN'T MATCH !")
  }
};

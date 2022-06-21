import * as yup from "yup";

export const defaultValues = {
    operator: "",
    phone: "",
    prix: "",
}


// TODO : Authentication with server
export const handleAuth = (values, navigation) => {
    if (values && navigation) {
        values.operator == "MarocTelecom" ?  navigation.navigate("MarocTele") :
        values.operator == "Inwi" ? navigation.navigate("Inwi") :
        values.operator == "Orange" ?  navigation.navigate("Orange") : null
    }
}

export const schemaValidation = yup.object().shape({
    operator: yup.string().required("Selectioner Operator is required"),
    phone: yup.number().required("Phone Number is required"),
    prix: yup.number().integer('invalid decimal').required(),
});
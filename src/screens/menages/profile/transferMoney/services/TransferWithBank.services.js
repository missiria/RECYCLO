import * as yup from "yup";

export const defaultValues = {
    bank_name: "",
    account_name: "",
    num_rib_bank: "",
    prix: "",
}


// TODO : Authentication with server
export const handleAuth = (values, navigation) => {
    if (values && navigation) {
        navigation.navigate("VersmentConferm")
    }
}

export const schemaValidation = yup.object().shape({
    bank_name: yup.string().required("Selectioner Bank is required"),
    account_name: yup.string().required("Nom Complet is required"),
    num_rib_bank: yup.number().required(),
    prix: yup.number().integer('invalid decimal').required(),
});
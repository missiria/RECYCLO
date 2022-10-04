import * as yup from "yup";

export const defaultValues = {
    cart_name: "",
    num_rib_bank: "",
    end_date : "",
    codeVerify  :""
}


// TODO : Authentication with server
export const handleSubmit = (values, navigation) => {
    navigation.navigate("MenageAddCard")
}

export const schema = yup.object().shape({
    cart_name: yup.string().required("Votre cart name is required"),
    num_rib_bank: yup.number().required(),
    end_date: yup.date().required("Nom Complet is required"),
    codeVerify: yup.number().integer('invalid decimal').required(),
});
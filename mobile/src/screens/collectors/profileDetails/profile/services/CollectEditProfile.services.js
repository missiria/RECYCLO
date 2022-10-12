import * as yup from "yup";
import { axiosInstance } from "../../../../../api/client";
import { getData, storeData } from "../../../../../hooks/hooks";


export const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cin: "",
    berthday_day: "",
    berthday_month: "",
    berthday_year: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
}


// TODO : Authentication with server
export const handleAuth = async (values, navigation) => {
    // * get the user
    const user = await getData('user')

    const { data } = await axiosInstance.put(`users/update/${user.id}`, values, {
        headers: { 'Authorization': user.auth.type + ' ' + user.auth.token }
    } )

    await storeData("user", data);
    if (values && navigation) {
        navigation.navigate("Profile")
    }
}

export const schemaValidation = yup.object().shape({
    first_name: yup.string().required("First Name is required").min(4).max(30),
    last_name: yup.string().required("Last Name is required").min(4).max(30),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phone: yup
        .number()
        .required("A phone number is required")
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point"),
    // address: yup.string().required(),
    city: yup.string().required(),
    cin: yup.string().required(),
    birth_day: yup.number().required().max(30).min(1),
    birth_month: yup.number().required().max(12).min(1),
    birth_year: yup.number().required().max(2006),
    current_password: yup.string().required().min(8).max(25),
    new_password: yup
        .string()
        .required('Please enter your password.')
        .min(8, 'Your password is too short.'),
    confirm_password: yup
        .string()
        .required('Please retype your password.')
        .oneOf([yup.ref('new_password')], 'Your passwords do not match.')
});
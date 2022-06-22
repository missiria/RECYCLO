import * as yup from "yup";

export const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    code_postal: "",
    national: "",
    cin: "",
    profession: "",
    berthday_day: "",
    berthday_month: "",
    berthday_year: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
}


// TODO : Authentication with server
export const handleAuth = (values, navigation) => {
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
    country: yup.string().required(),
    city: yup.string().required(),
    code_postal: yup.number().required(),
    national: yup.string().required(),
    cin: yup.string().required(),
    profession: yup.string().required(),
    berthday_day: yup.number().required().max(30).min(1),
    berthday_month: yup.number().required().max(12).min(1),
    berthday_year: yup.number().required().max(2006),
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
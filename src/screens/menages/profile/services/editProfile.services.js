import * as yup from "yup";
import { axiosInstance } from "../../../../api/client";
import { getData } from "../../../../hooks/hooks";

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
    birthday_day: "",
    birthday_month: "",
    birthday_year: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
}


// TODO : Authentication with server
export const handleAuth = async (values, navigation) => {
    // * get the user
  const user = await getData("user");
  await axiosInstance.put(`accounts/update`, values, {
    headers: { Authorization: `${user.auth.type} ${user.auth.token}` },
  });
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
    birthday_day: yup.number().required().max(30).min(1),
    birthday_month: yup.number().required().max(12).min(1),
    birthday_year: yup.number().required().max(2006),
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
import * as yup from "yup";

export const defaultValue = {
    password: '',
    confirmPassword: '',
};

export const schema = yup.object().shape({
    password: yup.string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
    confirmPassword: yup.string()
        .required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
});

export const handleSubmit = (values, navigation) => {
    navigation.navigate('Done');
}
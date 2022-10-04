import * as yup from "yup";

export const defaultValues = {
    city: "",
    neighborhood: "",
};

export const schema = yup.object().shape({
    city: yup.string().required("City is required"),
    neighborhood: yup.string().required("neighborhood is required").min(2).max(200),
});

export const handleRegister = async (userData, navigation, setErrors) => {
    // console.log("userData", userData);
    navigation.navigate("ChooseTypeIdentityConfirmation");
};
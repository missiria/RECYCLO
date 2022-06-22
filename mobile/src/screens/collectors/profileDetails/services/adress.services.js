import * as yup from "yup";
import {getData,storeData} from "../../../../hooks/hooks";

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
    const user = await getData('user');

    
    const response = await apiClient.post("accounts", {

        'city' : userData.city,
        'address' : userData.neighborhood,
    });

    
    navigation.navigate("ChooseTypeIdentityConfirmation");
};
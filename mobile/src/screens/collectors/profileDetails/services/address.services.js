import * as yup from "yup";
import apiClient from "../../../../api/client";
import {getData,storeData} from "../../../../hooks/hooks";

export const defaultValues = {
    city: "",
    neighborhood: "",
};

export const schema = yup.object().shape({
    city: yup.string().required("City is required"),
    neighborhood: yup.string().required("neighborhood is required").min(2).max(200),
});

export const handleRegister = async (userData, navigation, setErrors, setLoading) => {
    setLoading(true)
    const user = await getData('user');
    
    apiClient.put("accounts", {
        'city' : userData.city,
        'address' : userData.neighborhood,
    },{ headers: { 'Authorization': user.auth.type+' '+user.auth.token }, }).then((response) => {
        //console.log('response',response);
        if(response.data?.errors)
        {
            setErrors(response.data.errors);
            return
        }
        else if(response.data?.error){
            setErrors(response.data.message);
            return
        }
        else
        {
            navigation.navigate("ChooseTypeIdentityConfirmation");
        }
    }).then(() => setLoading(false))
    // {\"error\":401,\"message\":\"Must be logged in\"}
};
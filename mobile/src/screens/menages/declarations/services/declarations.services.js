import * as yup from "yup";
import apiClient from "~/api/client";
import {getData,storeData} from "~/hooks/hooks";

export const getDeclarations = async (status) => {

    const user = await getData('user');
    const formData = new FormData()
    formData.append('status' , status)

    apiClient.post("declarations",formData ,{ headers: { 
        'Authorization': user.auth.type+' '+user.auth.token ,
        'Content-Type': 'multipart/form-data'
    }}).then((response) => {
        console.log('response.data',response.data);   
        return response.data;
        //if(response.data?.errors)
        //    setErrors(response.data?.errors);
        //else if(response.data?.error)
        //    setErrors([response.data?.error]);
        //else if(response.data?.error)
            
    })
};
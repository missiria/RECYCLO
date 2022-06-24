import * as yup from "yup";
import apiClient from "../../../../api/client";
import {getData,storeData} from "../../../../hooks/hooks";

export const schema = yup.object().shape({
    front_card: yup.mixed().required('recto is required'),
    back_card: yup.mixed().required('verso is required'),
});

export const handleUpload = async (typeIdentity,imageRecto,imageVerso,navigation) => {
    // console.log("userData", userData);
    /* 
    const _valid = await schema.validate({
        front_card: imageRecto,
        back_card:imageVerso
    });
    */
    const user = await getData('user');
    const formData = new FormData()
    formData.append('type' , typeIdentity)
    formData.append('front_card', {
        uri:imageRecto,
        name:'front_card.jpg',
        type:'image/jpg'
    })
    formData.append('back_card', {
        uri:imageVerso,
        name:'back_card.jpg',
        type:'image/jpg'
    })
    apiClient.post("account/upload_verfication",formData ,{ headers: { 
        'Authorization': user.auth.type+' '+user.auth.token ,
        'Content-Type': 'multipart/form-data'
    }}).then((response) => {
        //console.log('response',response);
        console.log('response.data',response.data);
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
            navigation.navigate("VerifyAccount")
        }
    });

    

    //
    /* 
    const user = await getData('user');

    apiClient.post("accounts", {
        'city' : userData.city,
        'address' : userData.neighborhood,
    },{ headers: { 'Authorization': user.auth.type+' '+user.auth.token }}).then((response) => {
        //console.log('response',response);
        console.log('response.data',response.data);
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
    });
    */
};
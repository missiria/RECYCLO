import * as Yup from 'yup';

export const defaultValue = {
    type : "",
    city : "",
    time : "",
}

export const schema = Yup.object().shape({
    type : Yup.string("Pleas Select Type").required(),
    city : Yup.string("PLease Select City").required(),
    time : Yup.string("PLease Select Time").required(),
})

export const handleSubmit =  (values, navigation) => {
    console.log(values);
}
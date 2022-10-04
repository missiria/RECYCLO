import * as yup from 'yup';

export const defaultValue = {
    optOne : '2',
    optTwo : '0',
    optThree : '6',
    optFour : '5',
}

export const schema = yup.object().shape({
    optOne: yup.string().required('Option 1 requis'),
    optTwo: yup.string().required('Option 2 requis'),
    optThree: yup.string().required('Option 3 requis'),
    optFour: yup.string().required('Option 4 requis'),
}).required('Veuillez remplir toutes les options');

export const handleSubmit = (values, navigation) => {
    navigation.navigate('ChangePassword');
}
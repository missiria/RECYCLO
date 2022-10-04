import * as yup from 'yup';

export const defaultValue = {
    email : ''
}

export const schema = yup.object().shape({
    email: yup.string().email('Please Enter a valide Email ').required('Email requis'),
});

export const handleSubmit = (values, navigation) => {
    navigation.navigate('MultiFactor');
}
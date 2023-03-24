import {useEffect} from 'react';
import {storeData} from "../../hooks/hooks";

export default function Logout({ navigation }) {

    const doUserLogOut = async function () {
        return await storeData('user',null).then(async () => {
            navigation.navigate('LoginIndex');
            return true;
        })
        .catch((error) => {
            Alert.alert('Error!', error.message);
            navigation.goBack();
            return false;
        });
    };

    useEffect(() => {
        doUserLogOut()
    });

    return(<></>);
}

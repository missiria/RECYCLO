import * as yup from "yup";
import { axiosInstance } from "../../../../api/client";
import { getData } from "../../../../hooks/hooks";

export const defaultValues = {
    operator: "",
    phone: "",
    amount: "",
}


// TODO : Authentication with server
export const handleAuth = async (values, navigation, setIsLoading) => {
    console.log("values >>", values);
    setIsLoading(true)
    const user = await getData('user')
    console.log(user);
    const { data } = await axiosInstance.post("recharges", values, {
        headers: {
            'Authorization' : `${user?.auth?.type} ${user?.auth?.token}`
        }
    })
    setIsLoading(false)

    console.log("data >>", data)
    if (values && navigation) {
        navigation.navigate("RechargeSuccess")
        // values.operator == "IAM" ?  navigation.navigate("MarocTele") :
        // values.operator == "INWI" ? navigation.navigate("Inwi") :
        // values.operator == "ORANGE" ?  navigation.navigate("Orange") : null
    }
}

export const schemaValidation = yup.object().shape({
    operator: yup.string().required("Selectioner Operator is required"),
    phone: yup.number().required("Phone Number is required"),
    amount: yup.number().integer('invalid decimal').required(),
});
import * as yup from "yup";
import apiClient from "~/api/client";
import { setErrorsAPI } from "~/services/v12";

import { getData } from "../../../../hooks/hooks";

export const defaultValues = {
  city: "",
  address: "",
};

export const schema = yup.object().shape({
  city: yup.string().required("City is required"),
  address: yup
    .string()
    .required("address is required")
    .min(2)
    .max(250),
});

export const handleAddressRegister = async (
  userData,
  navigation,
  setErrors,
  setLoading,
  cities
) => {
  try {
    setLoading(true);
    const user = await getData("user");
    const city = cities.find((city) => city.name === userData.city);

    if (new Number(city.id) < 0)
      return setErrors({ city: "The filled city not found !" });

    const addressData = {
      city_id: city.id,
      address: userData.address,
    };

    // TODO : It's good idea to makes the user token Authorization generic
    const response = await apiClient.put("accounts/address", addressData, {
      headers: {
        Authorization: `${user.auth.type} ${user.auth.token}`,
      },
    });

    console.log('response.data.errors', response)

    if (response.data?.errors) {
      setErrors(setErrorsAPI(response.data.errors));
    } else if (response.data?.error) {
      throw new Error(response.data.message);
    } else {
      navigation.navigate("ChooseTypeIdentityConfirmation");
    }
  } catch (error) {
    console.error(error);
    setErrors([error.message]);
  } finally {
    setLoading(false);
  }
};

export const getCities = async (setCities) => {
  const response = await apiClient.get("cities");
  if (response.status === 200) {
    setCities(response.data);
  } else {
    return [];
  }
};

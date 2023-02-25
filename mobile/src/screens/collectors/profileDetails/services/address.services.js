import * as yup from "yup";
import apiClient from "~/api/client";
import { getData } from "../../../../hooks/hooks";

export const defaultValues = {
  city: "",
  neighborhood: "",
};

export const schema = yup.object().shape({
  city: yup.string().required("City is required"),
  neighborhood: yup
    .string()
    .required("neighborhood is required")
    .min(10)
    .max(200),
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
      city: userData.city,
      address: userData.neighborhood,
    };

    // TODO : It's good idea to makes the user token Authorization generic
    const response = await apiClient.put("accounts/update", addressData, {
      headers: {
        Authorization: `${user.auth.type} ${user.auth.token}`,
      },
    });

    if (response.data?.errors) {
      setErrors(response.data.errors);
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

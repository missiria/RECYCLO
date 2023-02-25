import * as yup from "yup";
import { axiosInstance } from "../../../../api/client";
import { getData } from "../../../../hooks/hooks";
import apiClient from "~/api/client";

export const defaultValues = {
  city: "",
  neighborhood: "",
};

export const schema = yup.object().shape({
  city: yup.string().required("City is required"),
  neighborhood: yup
    .string()
    .required("neighborhood is required")
    .min(2)
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

    if (!city) {
      throw new Error("City not found");
    }

    const response = await axiosInstance.put(
      "accounts/update",
      {
        city_id: city.id,
        city: userData.city,
        address: userData.neighborhood,
      },
      {
        headers: {
          Authorization: `${user.auth.type} ${user.auth.token}`,
        },
      }
    );

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

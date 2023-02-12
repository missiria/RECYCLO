import apiClient from "~/api/client";
import { getData } from "~/hooks/hooks";
import FormData from "isomorphic-form-data";

export const handleDeclaration = async (
  date,
  time,
  quantity,
  price,
  images,
  collectId,
  navigation,
  setErrors
) => {
  try {
    const user = await getData("user");
    if (!user) {
      throw new Error("User not found");
    }
    const formData = new FormData();
    formData.append("date", date);
    formData.append("time", time);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("collect_id", collectId);
    images.forEach((imageUri, i) => {
      formData.append("images[" + i + "]", {
        uri: imageUri,
        name: i + ".jpg",
        type: "image/jpg",
      });
    });

    const response = await apiClient.post("declarations/add", formData, {
      headers: {
        Authorization: `${user.auth.type} ${user.auth.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data?.errors) {
      console.log(response.data.errors);
      setErrors(response.data.errors);
    } else if (response.data?.error) {
      throw new Error(response.data.message);
    } else {
      navigation.navigate("DeclarationSuccess");
    }
  } catch (error) {
    console.error(error);
    setErrors([error.message]);
  }
};
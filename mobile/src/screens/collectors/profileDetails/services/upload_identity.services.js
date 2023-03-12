import * as yup from "yup";
import apiClient from "~/api/client";
import { setErrorsAPI } from "~/services/v12";
import { getData } from "../../../../hooks/hooks";

export const handleUploadId = async (
  typeIdentity,
  imageRecto,
  imageVerso,
  setErrors,
  navigation
) => {
  const user = await getData("user");
  const formData = new FormData();

  formData.append("type_verification", typeIdentity);

  formData.append("front_card", {
    uri: imageRecto,
    name: "front_card.jpg",
    type: "image/jpg",
  });

  formData.append("back_card", {
    uri: imageVerso,
    name: "back_card.jpg",
    type: "image/jpg",
  });

  try {
    const response = await apiClient.post(
      "account/upload_verfication",
      formData,
      {
        headers: {
          Authorization: `${user.auth.type} ${user.auth.token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data?.errors) {
      setErrors(setErrorsAPI(response.data.errors));
    } else if (response.data?.error) {
      setErrors(response.data.message);
    } else {
      navigation.navigate("VerifyAccount");
    }
  } catch (error) {
    console.error("Error in handleUploadId: ", error);
    setErrors({ api: "There was an error uploading your ID, please try again later." });
  }
};

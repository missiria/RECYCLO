import * as yup from "yup";
import apiClient from "~/api/client";
import { setErrorsAPI } from "~/services/v12";
import { getData } from "../../../../hooks/hooks";

export const schema = yup.object().shape({
  front_card: yup.mixed().required("recto is required"),
  back_card: yup.mixed().required("verso is required"),
});

export const handleUploadId = async (
  typeIdentity,
  imageRecto,
  imageVerso,
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

  apiClient
    .post("account/upload_verfication", formData, {
      headers: {
        Authorization: user.auth.type + " " + user.auth.token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("account/upload_verfication", response);
      if (response.data?.errors) {
        setErrors(setErrorsAPI(response.data.errors));
        return;
      } else if (response.data?.error) {
        setErrors(response.data.message);
        return;
      } else {
        // navigation.navigate("VerifyAccount");
      }
    });
};

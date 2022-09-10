import * as yup from "yup";
import apiClient from "~/api/client";
import { getData, storeData } from "~/hooks/hooks";

// TODO : Create tests for this method
export const handleDeclaration = async (
  dateDeclary,
  timeDeclary,
  quantity,
  price,
  images,
  collectId,
  navigation
) => {
  const user = await getData("user");
  const formData = new FormData();
  formData.append("date", dateDeclary);
  formData.append("time", timeDeclary);
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
  //console.log("user",user);

  apiClient
    .post("declarations/add", formData, {
      headers: {
        Authorization: user.auth.type + " " + user.auth.token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      //console.log('response.data',response.data);
      if (response.data?.errors) {
        setErrors(response.data.errors);
        return;
      } else if (response.data?.error) {
        setErrors(response.data.message);
        return;
      } else {
        navigation.navigate("DeclarationSuccess");
      }
    });
};

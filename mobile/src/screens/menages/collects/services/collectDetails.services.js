import { useState } from "react";
import apiClient from "~/api/client";

const now = new Date(Date.now());

export async function useAddDeclaration({
  date,
  time,
  quantity,
  price,
  collect_id,
  navigation,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeclarationSubmition = async () => {
    try {
      setIsLoading(true);
      const response = {};

      if (date > now) {
        setIsLoading(true);

        response = await apiClient.post(
          "declarations/add",
          JSON.stringify({
            date: date.toLocaleDateString(),
            time,
            quantity: Number(quantity),
            price,
            collect_id,
          })
        );

        setIsLoading(false);

        if ([200, 201].includes(response.status) && response.data)
          navigation.navigate("DeclarationSuccess", response.data);
        else {
          Alert.alert("that error occured: ", response.data);
          // TODO: handle this errors + translate it
        }
      } else Alert.alert("select date");
    } catch (e) {
      setIsLoading(false);

      Alert.alert("something went wrong, try later");
      // TODO: show translatedinternal error message to the user
    }
  };

  return { isLoading, handleDeclarationSubmition };
}

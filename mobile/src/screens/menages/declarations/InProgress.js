import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  React,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import i18n from "i18next";

import { EdgeCardDemande } from "~/ui/cards/EdgeCardDemande";
import { useFetch } from "../../../hooks/hooks";

export default function InProgress() {
  const [declarations, setDeclarations] = useState([]);

  // * Fetch Declarations
  const { data, isLoading, error, refetch } = useFetch("declarations", {
    method: "POST",
    body: JSON.stringify({
      status: "PENDING",
    })
  })

  // * When the user clicks "Annuler"
  const [trigger, {}] = useFetch(undefined, {
    method: "PUT",
    body: JSON.stringify({
      status: "CANCELED",
    })
  }, true)

  useEffect(() => {
    if (data !== null) {
      setDeclarations(data);
    }
  }, [isLoading]);

  console.log("data >>",  data)

  const textAction = i18n.t("menageDemend.wait");
  return (
    <View style={styles.container}>
      <ScrollView>
        {error !== null ? (
          <Text>{error.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#ff00ff" />
        ) : (
          declarations?.map((declaration) => (
            <EdgeCardDemande
              key={declaration.id}
              declaration={declaration}
              textAction={textAction}
              styleAction={styles.actionWait}
              onPressAction={() => {
                console.log("onPressAction");
              }}
              onPressCancel={() => {
                trigger(`declarations/update/${declaration.id}`)

                // * Refetch
                refetch()
              }}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  actionWait: {
    backgroundColor: "#5B68F6",
    color: "white",
  },
});

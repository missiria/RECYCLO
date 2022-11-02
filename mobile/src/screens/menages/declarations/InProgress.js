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

import { useAPI } from "~/hooks/hooks";
import { EdgeCardDemande } from "~/ui/cards/EdgeCardDemande";

export default function InProgress() {
  const [declarations, setDeclarations] = useState([]);
  const { isLoading, error, data } = useAPI(
    {
      url: "declarations",
      method: "POST",
      data: {
        status: "PENDING",
      },
    },
    true
  );

  useEffect(() => {
    if (data !== null) {
      setDeclarations(data);
      console.log(data);
    }
  }, [data]);

  console.log("data >>",  data)

  const textAction = i18n.t("menageDemend.wait");
  return (
    <View style={styles.container}>
      <ScrollView>
        {error !== null ? (
          <Text>{error.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="small" color="#ff00ff" />
        ) : (
          declarations &&
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
                console.log("Cancelled");
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

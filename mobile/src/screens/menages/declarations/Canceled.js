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

export default function Canceled() {
  const [declarations, setDeclarations] = useState([]);
  const { isLoading, error, data } = useAPI(
    {
      url: "declarations",
      method: "POST",
      data: {
        status: "CANCELED",
      },
    },
    true
  );

  useEffect(() => {
    if (data !== null) {
      setDeclarations(data);
    }
  }, [data]);

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
              onPressDelete={() => {
                console.log("onPressDelete");
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
});

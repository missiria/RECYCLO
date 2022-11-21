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
import { useFetch } from "../../../hooks/hooks";

export default function Ended() {
  const [declarations, setDeclarations] = useState([]);

  const [trigger, {}] = useFetch(undefined, {
    method: 'DELETE',
  }, true)

  const { isLoading, error, data, refetch } = useFetch(
     "declarations",
    {
      method: "POST",
      body: JSON.stringify({
        status: "PAID",
      }),
    },
  );


  useEffect(() => {
    if (data !== null) {
      setDeclarations(data);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {error !== null ? (
          <Text>{error?.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="small" color="#ff00ff" />
        ) : (
          declarations?.map((declaration) => (
            <EdgeCardDemande
              key={declaration.id}
              declaration={declaration}
              onPressDelete={async () => {
                await trigger(`declarations/delete/${declaration.id}`)
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
});

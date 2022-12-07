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

export default function Canceled() {
  const [declarations, setDeclarations] = useState([]);
  const { isLoading: isFetching, error, data } = useAPI(
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
  }, [isFetching]);

  const [deleteDeclaration, { isLoading, refetch }] = useFetch(null, {
    method: 'DELETE',
  }, true)

  return (
    <View style={styles.container}>
      <ScrollView>
        {error !== null ? (
          <Text>{error.message}</Text>
        ) : isFetching ? (
          <ActivityIndicator size="small" color="#ff00ff" />
        ) : (
          declarations &&
          declarations?.map((declaration) => (
            <EdgeCardDemande
              key={declaration.id}
              declaration={declaration}
              onPressDelete={async () => {
                await deleteDeclaration(`declarations/delete/${declaration.id}`)
                await refetch()
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

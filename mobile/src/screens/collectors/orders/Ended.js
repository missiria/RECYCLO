import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import i18n from "i18next";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardOrder } from "~/ui/cards/EdgeCardOrder";
import { useFetch } from "../../../hooks/hooks";

export default function Ended() {
  const [orders, setOrders] = useState([]);

  const { isLoading, error, data, refetch } = useFetch("orders", {
    method: "POST",
    body: JSON.stringify({
      status: "DONE",
    }),
  });

  useEffect(() => {
    if (data !== null) {
      setOrders(data);
    }
  }, [isLoading]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {error ? (
          <Text>{error.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#ff00ff" />
        ) : orders ? (
          orders.length > 0 ? (
            orders.map((order) => (
              <EdgeCardOrder
                key={order.id}
                order={order}
                onPressDelete={() => {
                  console.log("Delete");
                }}
              />
            ))
          ) : (
            <Text>No DONE order yet!</Text>
          )
        ) : null}
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

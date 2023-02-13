import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icond from "react-native-vector-icons/FontAwesome";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardOrder } from "~/ui/cards/EdgeCardOrder";

export default function Canceled() {
  const [orders, setOrders] = useState([]);

  const { isLoading, error, data } = useAPI(
    {
      url: "orders",
      method: "POST",
      data: {
        status: "CANCELED",
      },
    },
    true
  );

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {error ? (
          <Text>{error.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#ff00ff" />
        ) : orders ? (
          orders.length !== 0 ? (
            orders.map((order) => (
              <EdgeCardOrder
                key={order.id}
                order={order}
                onPressDelete={() => {
                  // TODO : We should finish for deleting order!
                  console.log("Delete");
                }}
              />
            ))
          ) : (
            <Text>No CANCELED order yet!</Text>
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

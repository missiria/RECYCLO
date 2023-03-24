import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useFetch } from "../../../hooks/hooks";

export default function CollectorBankDetails({ navigation, route }) {
  const { value, action, bank } = route.params;
  const [values, setValues] = useState({
    full_name: "",
    rib: "",
  });

  console.log("value, action, bank >>", value, action, bank);

  const [trigger, { isLoading, data }] = useFetch(
    `payment/create`,
    {
      method: "POST",
      body: JSON.stringify({
        amount: value,
        action,
        bank_id: bank,
        ...values,
      }),
    },
    true
  );

  console.log(data);
  return (
    <View>
      <Text>CollectorBankDetails</Text>
      <TextInput
        onChangeText={(text) => setValues({ ...values, full_name: text })}
        value={values.full_name} 
        style={styles.TextInput}
        label="Nom Complet"
        mode="outlined"
      />
      <TextInput
        onChangeText={(text) => setValues({ ...values, rib: text })}
        value={values.rib}
        style={styles.TextInput}
        label="RIB"
        mode="outlined"
      />

      <View style={styles.btnFooter}>
        <Text
          onPress={async () => {
            await trigger();
            navigation.navigate("SuccessCollectorPayment", { action });
          }}
          style={styles.buttonBtn}>
          {isLoading ? (
            <ActivityIndicator color={"#fff"} size="small" />
          ) : (
            <>valider</>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    // borderWidth: "1px",
    // borderColor: '#000',
  },
  buttonBtn: {
    marginTop: 20,

    backgroundColor: "#4ECB71",
    color: "#fff",
    fontSize: 15,
    padding: 14,
    borderRadius: 5,
    textAlign: "center",
  },

  btnFooter: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

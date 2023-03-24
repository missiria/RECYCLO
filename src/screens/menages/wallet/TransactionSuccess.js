import React from "react";
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import successImg from "../../../assets/images/done.png";

export default function TransactionSuccess({ navigation, route }) {
  const { action } = route.params
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={(action === 'TRANSFER' || action === 'ATM') ? successImg : ""} />
      <Text style={styles.title}>Félicitations!</Text>
      <Text style={styles.description}>
        Le montant sera déduit de votre solde!{" "}
      </Text>
      <TouchableHighlight style={[styles.buttonContainer]} onPress={() => navigation.navigate('MenageHome')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    height: "100%",
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 22,
    color: "#5F6D7A",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#33CC66",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

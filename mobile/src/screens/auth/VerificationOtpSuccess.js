import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import HeaderSuccess from "../../assets/images/done.png";
import i18n from "i18next";
import { EdgeButton } from "~/ui/buttons/EdgeButton";
import { useState } from "react";
import { useEffect } from "react";
import { getCurrentUser } from "./services/VerificationOtpSuccess.services";

export default function ValidationSuccess({ navigation, route }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser(setUser);
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bigText}>{i18n.t("login.congratulation")}</Text>
        <Text style={styles.smallText}>
          {i18n.t("login.your-number-phone-is-verified")}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={HeaderSuccess} style={styles.Img} />
        <Text style={styles.TextInput}>
          {i18n.t("login.congratulation_caption")}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <EdgeButton
          text="Terminé"
          onPress={() => {
            user?.user.type === "MENAGE"
              ? navigation.navigate("MenageHome")
              : navigation.navigate("Address");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Img: {
    width: 150,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bigText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 17,
    textAlign: "center",
    color: "#7C7C7C",
    marginBottom: 10,
  },
  phoneText: {
    color: "#33CC66",
    fontWeight: "bold",
    fontSize: 19,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 5,
    borderBottomWidth: 2,
    marginLeft: 10,
    textAlign: "center",
    borderColor: "red",
    fontWeight: "bold",
    color: "black",
  },
  TextInput: {
    color: "#7C7C7C",
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

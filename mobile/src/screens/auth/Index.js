import React from "react"
import i18n from "i18next"
import { View, Text, StyleSheet, Image } from "react-native"
import HeaderIndexLogin from "../../assets/images/logo_2.png"


export default function LoginIndex({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoImg}>
        <Image source={HeaderIndexLogin} />
      </View>
      <View style={styles.buttonLogin}>
        <View>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonOne}
          >
            {i18n.t("login.sign_in")}
          </Text>
        </View>
        <View>
          <Text
            style={styles.buttonTwo}
            onPress={() => navigation.navigate("Register")}
          >
            {i18n.t("login.sign_up")}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoImg: {
    flex: 5,
    justifyContent: "center",
  },
  buttonLogin: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOne: {
    backgroundColor: "#33CC66",
    color: "white",
    fontWeight: "bold",
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    width: 200,
    textAlign: "center",
  },
  buttonTwo: {
    backgroundColor: "lightgray",
    color: "black",
    fontWeight: "bold",
    padding: 15,
    paddingHorizontal: 64,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    justifyContent: "center",
    textAlign: "center",
  },
});

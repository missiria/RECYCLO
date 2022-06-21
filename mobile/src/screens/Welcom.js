import { StyleSheet, Text, View,  Image,  } from "react-native";
import i18n from "i18next";
import header from "../assets/images/1.png";
import { style } from "../assets/styles/Onboard";

export default function Welcom({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={style.ImageStyle} source={header} />
      </View>
      <View style={styles.containerText}>
        <Text style={style.TitleText}>{i18n.t("welcome.hello")}</Text>
        <Text style={style.DescText}>{i18n.t("welcome.register")}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding")}
        >
          {i18n.t("welcome.start")}
        </Text>
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
  
  containerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#33CC66",
    borderRadius: 100,
    padding: 15,
    width: 300,
    color: "white",
    textAlign: "center",
    borderRadius: 7,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

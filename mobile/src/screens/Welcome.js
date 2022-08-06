import { StyleSheet, Text, View,  Image,  } from "react-native";
import i18n from "i18next";
import header from "../assets/images/1.png";
import { style } from "../assets/styles/Onboard";
import { EdgeButton } from "~/ui/buttons/EdgeButton"

export default function Welcome({ navigation }) {
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
        <EdgeButton text={i18n.t("welcome.start")} onPress={() => navigation.navigate("Onboarding")} />
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

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

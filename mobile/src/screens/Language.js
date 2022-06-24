import {useState,useEffect} from "react";
import i18n from "i18next";
import { style } from "../assets/styles/Lang";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

function Language({ navigation }) {

  const [checked, setChecked] = useState("fr");

  const handleValidChoice = (lang) => {
    if (lang.length == 2) {
      navigation.navigate("Salut");
    } else {
      alert("Veuillez choisir une option!");
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setChecked(lang);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <View>
          <View>
            <Text style={style.TextOne}>{i18n.t("langues.choice-lang")}</Text>
          </View>
          <View>
            <Text style={style.TextTwo}>
              {i18n.t("langues.choice-lang-paragraph")}
            </Text>
          </View>
        </View>
        <View>
          <View style={style.ArabicChec}>
            <View style={style.ArabicChild}>
              <Text>
                <RadioButton
                  value="arabic"
                  status={checked === "ar" ? "checked" : "unchecked"}
                  onPress={() => changeLanguage("ar")}
                />
              </Text>
            </View>
            <View style={style.ArabicChild}>
              <Text onPress={() => changeLanguage("ar")}>
                {i18n.t("langs.ar")}
              </Text>
            </View>
          </View>
          <View style={style.ArabicChec}>
            <View style={style.ArabicChild}>
              <Text style={{ color: "green" }}>
                <RadioButton
                  value="arabic"
                  status={checked === "fr" ? "checked" : "unchecked"}
                  onPress={() => changeLanguage("fr")}
                />
              </Text>
            </View>
            <View style={style.ArabicChild}>
              <Text onPress={() => changeLanguage("fr")}>
                {i18n.t("langs.fr")}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonCaontainer}>
        <Text style={styles.button} onPress={() => handleValidChoice(checked)}>
          {i18n.t("langues.select")}
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
  containerTwo: {
    flex: 1,
    justifyContent: "center",
  },
  buttonCaontainer: {
    flex: 0.4,
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
});

export default Language;

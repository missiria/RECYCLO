import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import arIcon from "../../../assets/images/ar.png";
import frIcon from "../../../assets/images/fr.png";
import i18n from "i18next";


export default function Collectlanguages() {
  const [currentLang, setCurrentLang] = useState("fr");
  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    alert(`Vous avez bien changer la langue de l'application en ${lang}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Langue de l'Application
      </Text>
      <Text
        style={styles.titleDesc}
      >
        Sélectionnez votre langue préférée
      </Text>
      <TouchableOpacity style={styles.boxLang} onPress={() => changeLanguage("ar")}>
        <Image style={{ marginRight: 20 }} source={arIcon} />
        <View>
          <Text style={styles.langType}>
            {i18n.t("langs.ar")}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 14,
              color: "#A3A3A3",
            }}
          >
            {i18n.t("langs.ar")}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxLang} onPress={() => changeLanguage("fr")}>
        <Image style={{ marginRight: 20 }} source={frIcon} />
        <View>
          <Text style={styles.langType}>
            {i18n.t("langs.fr")}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 14,
              color: "#A3A3A3",
            }}
          >
            {i18n.t("langs.fr")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'white',
  },
  boxLang: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius:5,
    paddingVertical: 14,
    marginBottom: 10,
    marginHorizontal:20,
  },
  title: { 
    marginHorizontal: 20, 
    fontSize: 25, 
    fontWeight: "bold" 
  },
  titleDesc : { 
    marginHorizontal: 20, 
    color: "#7C7C7C", 
    marginBottom: 20 
  },
  langType : { 
    textAlign: "left", 
    fontWeight: "bold", 
    fontSize: 20 
  }
});

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import FooterNav from "../navigations/FooterNav";
import imgDone from '~/assets/images/done.png';

export default function DeclaredSuccess({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.descBoxContainer}>
          <View>
            <Image
              style={styles.doneImg}
              source={imgDone}
            />
          </View>
          <View>
            <Text style={styles.bigText}>Félicitations!</Text>
            <Text style={styles.descText}>Merci de recycler</Text>
          </View>
        </View>
        <View style={styles.btns}>
          <Text
            onPress={() => navigation.navigate("DeclarationsIndex")}
            style={styles.btnBolded}
          >
            SUIVI
          </Text>
          <Text
            onPress={() => navigation.navigate("MenageHome")}
            style={styles.btnLighted}
          >
            HOME
          </Text>
        </View>
      </ScrollView>
      <FooterNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  descBoxContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  doneImg: {
    width: 150,
    resizeMode: "contain",
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  descText: {
    fontWeight: "200",
    fontSize: 20,
    textAlign: "center",
    color: "#767676",
  },
  btns: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  btnBolded: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#33CC66",
    borderRadius: 6,
    marginHorizontal: 35,
    fontWeight: "bold",
    padding: 15,
    color: "white",
  },
  btnLighted: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    marginHorizontal: 35,
    fontWeight: "bold",
    padding: 15,
    color: "black",
    marginTop: 10,
    borderColor: "#33CC66",
    borderWidth: 1,
  },
});

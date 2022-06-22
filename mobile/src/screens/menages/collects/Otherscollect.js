import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../navigations/Navbar";
import FooterNav from "../navigations/FooterNav";
import { moreCollects } from "./collectData";
import CollectItem from "./CollectItem/CollectItem";


export default function Otherscollect({ navigation }) {
  return (
    <SafeAreaView style={styles.containerOne}>
      <Navbar navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerBox}>
            <View style={styles.textBox}>
              <Text style={styles.boldTitle}>Autres Déchets</Text>
              <Text style={styles.smallDesc}>
                cliquez pour déclarer vos déchets
              </Text>
            </View>
          </View>
          <View style={styles.cards}>
            {moreCollects.map((collect) => {
              return (
                <CollectItem
                  navigation={navigation}
                  key={collect.id}
                  collect_name={collect.name}
                  img={collect.img}
                />
              );
            })}
          </View>
          <View></View>
        </View>
      </ScrollView>
      <FooterNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 10,
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 164,
    marginLeft: -5,
    marginRight: -5,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
  },
  cardImg: {
    width: "100%",
    resizeMode: "contain",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
  cardBody: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    padding: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    shadowColor: "#495371",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
    marginTop: -4,
  },
  headerImg: {
    paddingRight: 15,
  },
  textBox: {
    marginTop: 11,
  },
  boldTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  smallDesc: {
    color: "#7C7C7C",
    fontSize: 11,
  },
  btnIconPlus: {
    color: "#33CC66",
    fontSize: 23,
  },
  titleCateg: {
    color: "black",
    fontWeight: "bold",
  },
});
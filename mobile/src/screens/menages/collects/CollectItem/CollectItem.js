import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";

// TODO : Make thumbnail url dynamic
const imgUrlAssets = "http://192.168.1.130:3333/uploads";

export default function CollectItem({ img, collect_name, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetail")}
      style={styles.card}
    >
      <View>
        <Image
          source={{ api: `${imgUrlAssets}/${img}` }}
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.titleCollect}>{collect_name} </Text>
        <Text>
          <Icon style={styles.btnIconPlus} name="squared-plus" />
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    marginLeft: -5,
    marginRight: -5,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: "#495371",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
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
  titleCollect: {
    color: "black",
    fontWeight: "bold",
  },
});

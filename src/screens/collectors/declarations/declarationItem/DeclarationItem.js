import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { UPLOAD_FOLDER_URL } from "~/api/constants";
import moment from "moment";

export default function DeclarationItem({ navigation, declaration }) {
  const img =
    UPLOAD_FOLDER_URL +
    (declaration.images.length > 0
      ? declaration.images[0].image
      : declaration?.collect?.image);

  // TODO : Check API why the route doesn't bring user property
  const username = declaration?.user?.fullName;
  const type = declaration?.collect?.collect_name;
  const city = "Agadir";
  const date = moment(declaration.created_at, moment.ISO_8601).fromNow();
  const quantity = declaration.quantity;
  console.log("declaration > ", declaration);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeclarationDetails", { declaration: declaration })
      }
      style={styles.cardBox}
    >
      <View>
        <Image style={styles.cardImg} source={{ uri: img }} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardBodyHeader}>
          <Text style={styles.boxUsername}>{username}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <View style={styles.cardBodyHeader}>
          <Text style={styles.cityBox}>{city}</Text>
          <Text style={styles.quantityBox}>{quantity} kgs</Text>
        </View>
        <View style={styles.cardBodyHeader}>
          <Text style={styles.timeBox}>{date}</Text>
          <Text style={styles.priceOfQt}>
            {declaration.price ?? "null"} Dhs/kgs
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 10,
    padding: 14,
    marginBottom: 1,
    marginTop: 20,
    borderRadius: 5,
    width: "100%",
  },
  cardImg: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 13,
  },
  cardContent: {
    flex: 1,
  },
  cardBodyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxUsername: {
    marginRight: 20,
    fontWeight: "bold",
  },
  type: {
    backgroundColor: "#33CC66",
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: "white",
    borderRadius: 5,
  },
  cityBox: {
    color: "#828282",
    marginTop: -10,
  },
  quantityBox: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 7,
  },
  timeBox: {
    color: "#828282",
    fontSize: 10,
  },
  priceOfQt: {
    color: "#828282",
    fontSize: 10,
    marginTop: 10,
  },
});

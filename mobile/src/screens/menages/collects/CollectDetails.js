import { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";
import FooterNav from "../navigations/FooterNav";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Entypo";

import i18n from "i18next";

import { UPLOAD_FOLDER_URL } from "~/api/constants";
import coinImg from "../../../assets/images/coin.png";
import { useDays, useMonths } from "~/hooks";
import useAddDeclaration from "./services/collectDetails.services";

const now = new Date(Date.now());

export default function CollectDetails({ navigation, route }) {
  const [date, setDate] = useState(now);
  const [show, setShow] = useState(false);
  const [text, setText] = useState(i18n.t("menageCollectDetails.chooseDate"));
  const [timeDeclaration, setTimeDeclaration] = useState("9 AM - 12 PM");
  const [quantity, setQuantity] = useState(5);

  const price = useMemo(
    () => Number(route.params?.collect.point) / 100,
    [route]
  );

  const months = useMonths();
  const days = useDays();

  const handleDateSelect = (_, selectedDate) => {
    const currentDate = selectedDate ?? now;

    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      days[tempDate.getDay()] +
      "," +
      tempDate.getDate() +
      " " +
      months[tempDate.getMonth()];

    setText(fDate);
  };

  const showDatepicker = () => setShow(true);

  //check if the quantity is less than 5 and show error
  useEffect(() => {
    if (Number(quantity) < 5) Alert.alert("You Must Declare at least 5 Kg");
  }, [quantity]);

  const { isLoading, handleDeclarationSubmition } = useAddDeclaration({
    date,
    time: timeDeclaration,
    quantity,
    price,
    collect_id: route.params?.collect.id,
    navigation,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Image
              style={styles.HeaderImage}
              source={{
                uri: `${UPLOAD_FOLDER_URL + route.params?.collect.image}`,
              }}
            />
          </View>
          <View style={styles.countBox}>
            <View>
              <Text style={styles.countTitle}>
                {route.params?.collect.collect_name}
              </Text>
            </View>
            <View style={styles.rightCountBox}>
              <Text style={styles.theCount}>{route.params?.collect.point}</Text>
              <Image style={styles.CoinImg} source={coinImg} />
            </View>
          </View>
          <View style={styles.theDescriptionBox}>
            <Text style={styles.priceText}>{i18n.t("menageDemend.price")}</Text>
            <Text style={styles.priceAnswerText}>
              {price} {i18n.t("menageCollectDetails.portion")}
            </Text>
          </View>
          <View style={styles.textBoxDescition}>
            <Text>{route.params?.collect.description}</Text>
            {/*
              <Text>Toutes sortes de plastique usagée :</Text>
              <View style={styles.textDescLists}>
                  {Data.map((list) => {
                  return (
                      <Text key={list.id}>
                      <Unorderedlist>
                          <Text>{list.text}</Text>
                      </Unorderedlist>
                      </Text>
                  );
                  })}
              </View>
            */}
          </View>
          <View>
            <View>
              <Text style={styles.textTitleDayYopONE}>
                {i18n.t("menageCollectDetails.planYourCollect")}
              </Text>
              <Text onPress={showDatepicker} style={styles.currentDate}>
                {text}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={handleDateSelect}
                />
              )}
              <Text style={styles.textTitleDay}>
                {i18n.t("menageCollectDetails.description-aswer")}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={
                timeDeclaration === "08:00 - 12:00"
                  ? styles.chosenTheTime
                  : styles.choseTheTime
              }
              onPress={() => setTimeDeclaration("08:00 - 12:00")}
            >
              9 AM - 12 PM
            </Text>
            <Text
              style={
                timeDeclaration === "12:00 - 16:00"
                  ? styles.chosenTheTime
                  : styles.choseTheTime
              }
              onPress={() => setTimeDeclaration("12:00 - 16:00")}
            >
              12 PM - 3 PM
            </Text>
            <Text
              style={
                timeDeclaration == "16:00 - 20:00"
                  ? styles.chosenTheTime
                  : styles.choseTheTime
              }
              onPress={() => setTimeDeclaration("16:00 - 20:00")}
            >
              3 PM - 6 PM
            </Text>
            <Text
              style={
                timeDeclaration == "20:00 - 00:00"
                  ? styles.chosenTheTime
                  : styles.choseTheTime
              }
              onPress={() => setTimeDeclaration("20:00 - 00:00")}
            >
              6 PM - 9 PM
            </Text>
            <View style={styles.quantityBox}>
              <Text style={styles.textTitleDay}>
                {i18n.t("menageCollectDetails.qty")} ({quantity}{" "}
                {i18n.t("menageCollectDetails.kg")})
              </Text>
              <View style={styles.quantity}>
                <Icon
                  style={styles.minusCount}
                  onPress={() => setQuantity(quantity - 1)}
                  name="squared-minus"
                />
                <TextInput
                  style={styles.quantityField}
                  keyboardType="numeric"
                  value={quantity.toString()}
                  onChangeText={(text) => setQuantity(text)}
                />
                <Icon
                  style={styles.plusCount}
                  onPress={() => setQuantity(quantity + 1)}
                  name="squared-plus"
                />
              </View>
            </View>
            <Text style={styles.textBottom}>
              {i18n.t("menageCollectDetails.description-term")}
            </Text>
          </View>
          <View style={styles.btnBoxDec}>
            <Text
              // onPress={() => navigation.navigate("DeclarationSuccess")}
              // onPress={() => navigation.navigate("CollectDetailsUploadImages")}
              onPress={handleDeclarationSubmition}
              style={styles.btnDeclaration}
            >
              {isLoading ? (
                <ActivityIndicator color={"#fff"} />
              ) : (
                i18n.t("introduction.next")
              )}
            </Text>
          </View>
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
  quantityBox: {
    marginTop: 20,
  },
  minusCount: {
    fontSize: 25,
    color: "#D9D9D9",
    marginRight: 10,
  },
  plusCount: {
    fontSize: 25,
    color: "#33CC66",
    marginLeft: 10,
  },
  quantityField: {
    width: 80,
    height: 45,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    color: "#262626",
  },
  priceText: {
    color: "#262626",
  },
  priceAnswerText: {
    color: "#262626",
  },
  textTitleDayYopONE: {
    color: "#262626",
    display: "none",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textBottom: {
    marginTop: 36,
    textAlign: "center",
    marginHorizontal: 20,
    fontWeight: "600",
  },
  btnBoxDec: {
    backgroundColor: "white",
    marginTop: 50,
    paddingBottom: 27,
    paddingTop: 27,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnDeclaration: {
    textAlign: "center",
    backgroundColor: "#33CC66",
    borderRadius: 6,
    marginHorizontal: 35,
    fontWeight: "bold",
    padding: 15,
    color: "white",
  },
  choseTheTime: {
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 6,
    marginHorizontal: 35,
    marginTop: 15,
    fontWeight: "bold",
    color: "black",
  },
  chosenTheTime: {
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#33CC66",
    borderRadius: 6,
    marginHorizontal: 35,
    marginTop: 15,
    backgroundColor: "#33CC66",
    color: "white",
    fontWeight: "bold",
  },
  HeaderImage: {
    width: "100%",
    height: 200,
  },
  countBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  rightCountBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  countTitle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  theCount: {
    marginRight: 10,
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
  theDescriptionBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  theDescriptionBoxItemLeft: {
    backgroundColor: "#F9B701",
    color: "white",
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  theDescriptionBoxItemRight: {
    backgroundColor: "#33CC66",
    color: "white",
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  textBoxDescition: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginTop: 20,
    marginHorizontal: 15,
  },
  textDescLists: {
    marginTop: 20,
  },
  textTitleDay: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
    color: "black",
    fontWeight: "bold",
  },
  currentDate: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 20,
  },
});

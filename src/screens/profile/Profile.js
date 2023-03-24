import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import FooterNav from "../navigations/FooterNav";
import GiftCard from "./GiftCard";

// ButtonEditProfile => file doesn't exist ?!!
import ButtonEditProfile from "./ButtonEditProfile";
import SoldCard from "./SoldCard";
import OperationsCards from "./OperationsCards";
import FooterProfile from "./FooterProfile";
import profileImg from "../../assets/images/p.jpg";
import apiClient from "../../api/client";

export const fetchData = async () => {
  const user = await apiClient.get("/auth");
  return console.log('User => ', response);
}

export default function Profile({ navigation }) {
  const [user, setUser] = useState([])
  useEffect(() => {
    const currentUser = fetchData()
    setUser(currentUser)
  }, [user, currentUser])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerProfile}>
          <Image style={styles.imgProfile} source={profileImg} />
          {user && user.fullName &&
            <Text style={styles.fullName}>
              {user.fullName}
            </Text>
          }
        </View>
        {/* Profile Cards  Components */}
        <GiftCard navigation={navigation} />
        <ButtonEditProfile navigation={navigation} />
        <SoldCard />
        <OperationsCards navigation={navigation} />
        <FooterProfile navigation={navigation} />
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
  fullName: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  headerProfile: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 50,
    paddingBottom: 30,
  },
  imgProfile: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 50,
    shadowColor: "red",
    shadowOffset: {
      width: 10,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    borderWidth: 2,
    borderColor: "white",
  },
});

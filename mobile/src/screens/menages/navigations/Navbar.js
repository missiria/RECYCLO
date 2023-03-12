import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import notifIcon from '../../../assets/images/notif.png'
import { useNavigationState } from "@react-navigation/native";
import iconUser from "../../../assets/images/user.png";
import { getNotifications } from "../notifications/services/notifications.services";

export default function Navbar({ navigation, title }) {
  const [notifications, setNotifications] = useState([]);
  const screenName = useNavigationState(
    (state) => state.routes[state.index].name
  );

  useEffect(() => {
    getNotifications(setNotifications);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={iconUser} style={styles.userImg} />
        </TouchableOpacity>
        <View>
          <Text style={styles.titleNav}>{title ? title : "RECYCLOO"}</Text>
        </View>
        <View>
          <Text onPress={() => navigation.navigate("Notifications")}>
            <Image 
              source={notifIcon}
              style={styles.notificationIcon}
            />
          </Text>
          <View style={
            styles.notificationCount}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  navBar: {
    paddingTop: 41,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 5,
  },
  notificationIcon: {
    fontWeight: "900",
    color: "#000000",
    fontSize: 25,
  },
  navIcon: {
    fontWeight: "100",
    color: "#000000",
  },
  titleNav: {
    color: "#33CC66",
    fontWeight: "bold",
    fontSize: 15,
  },
  notificationCount: {
    backgroundColor: "#33CC66",
    fontWeight: "bold",
    width: 12,
    height: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 50,
    color: "white",
    position: "absolute",
    top: -7,
    left: 10,
    fontSize: 12,
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 2,
  },
  userImg: {
    width: 30,
    height: 30,
  },
  notificationIcon : {
    width: 20,
    height : 16,
  }
});

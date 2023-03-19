// import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import IconIon from "react-native-vector-icons/Ionicons";
import { useNavigationState } from "@react-navigation/native";
import { getNotifications } from "../../menages/notifications/services/notifications.services";

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
        <View>
          <Text>
            <IconIon
              onPress={() => navigation.navigate("CollectorProfile")}
              style={styles.navIcon}
              name="person-circle-sharp"
              size={28}
              color="#000000"
            />
          </Text>
        </View>

        <View>
          <Text style={styles.titleNav}>{title ? title : "RECYCLOO"}</Text>
        </View>

        <View>
          {/* TODO : Delete and clean : CollectorNotification we should use one notification component for both */}
          <Text onPress={() => navigation.navigate("Notifications")}>
            <IconIon
              style={styles.notifiIcon}
              name={
                screenName == "CollectorNotification"
                  ? "notifications"
                  : "ios-notifications-outline"
              }
              size={20}
              color="#000000"
            />
          </Text>
          <Text style={styles.notificationCount}>
            {notifications ? notifications.length : 0}
          </Text>
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
  notifiIcon: {
    fontWeight: "900",
    color: "#000000",
    fontSize: 25,
  },
  navIcon: {
    fontWeight: "100",
    color: "#000000",
  },
  titleNav: {
    fontSize: 15,
  },
  notificationCount: {
    backgroundColor: "red",
    fontWeight: "bold",
    width: 16,
    height: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 50,
    color: "white",
    position: "absolute",
    top: -3,
    left: 14,
    fontSize: 12,
  },
});

import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Navbar from "../navigations/Navbar";
import FooterNav from "../navigations/FooterNav";
import NotificationItems from "./NotificationItems";
import EmptyNotification from "./NotificationEmpty";
import moment from 'moment'
import { getNotifications } from "./services/notifications.services";

export default function Notification({ navigation }) {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    getNotifications(setNotifications);
  }, []);

  const showNotifications = () => {
    if (notifications && notifications?.length == 0) {
      return (
        <EmptyNotification />
      );
    } else {
      return (
        <>
          <View style={styles.notificationHeaderTop}>
              <Text style={styles.headerBigText}>Notifications</Text>
              <Text style={styles.headerSmallDescText}>
                Balayez vers la gauche pour la supprimer
              </Text>
            </View>
           {notifications?.map((notification, index) => (
            <NotificationItems
              key={index}
              title={notification.note}
              type_id={notification.type_id}
              time={new Date(notification.created_at).toLocaleTimeString()}
              date={moment(notification.created_at).format('DD-MM-YYYY')}
            />
          ))}
          </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Notifications" navigation={navigation} />
      <ScrollView>
        {showNotifications()}
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
  headerBigText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  headerSmallDescText: {
    fontSize: 13,
    marginTop: 6,
    color: "#A3A3A3",
  },
  notificationHeaderTop: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
});

import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Navbar from "../navigations/Navbar";
import FooterNav from "../navigations/FooterNav";
import NotificationItems from "./NotificationItems";
import { Data } from "./NotificationTestFakeData";
import EmptyNotification from "./NotificationEmpty";

export default function Notification({ navigation }) {
  const emptyData = () => {
    if (Data.length <= 0) {
      return (
        // if notification is empty
        <EmptyNotification />
      );
    } else {
      return (
        // if notifications is not empty
        Data.map((item) => (
          <NotificationItems
            key={item}
            title={item.title}
            time={item.time}
            date={item.date}
          />
        ))
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Notifications" navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.notificationHeaderTop}>
          <Text style={styles.headerBigText}>Notifications</Text>
          <Text style={styles.headerSmallDescText}>
            Balayez vers la gauche la notification pour la supprimer ou lue /
            non lue
          </Text>
        </View>
      </View>
      <ScrollView>{emptyData()}</ScrollView>
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
    textAlign: "center",
    margin: 10,
  },
  headerSmallDescText: {
    fontSize: 13,
    marginTop: 6,
    fontWeight: "100",
    color: "#A3A3A3",
  },
  notificationHeaderTop: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

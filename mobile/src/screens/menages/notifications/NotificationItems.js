import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import NotificationProps from "./NotificationProps";
import { Data } from "./NotificationTestFakeData";
import Icon from "react-native-vector-icons/FontAwesome5";
import notificationIcon from "../../../assets/images/notif.png";
// import Swipeout from 'react-native-swipeout';

export default function NotificationItems({ title, type_id, date, time }) {
  //the swipe delete putton
  const swipeOut = [
    {
      text: <Icon style={{ color: "#33CC66", fontSize: 20 }} name="trash" />,
      fontSize: 20,
      backgroundColor: "transparent",
      color: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: () => Alert.alert("You Want To Delete " + title),
    },
  ];
  return (
    <View>
      <TouchableOpacity>
        {/*
            <Swipeout
                backgroundColor='transparent'
                style={styles.container}
                autoClose={true} right={swipeOut}>
            </Swipeout>
        */}
        <TouchableOpacity
          onPress={() => {
            console.log('Redirect to : ', type_id)
          }}
          style={styles.notificationBoxCard}
        >
          <View>
            <Image style={styles.iconNotification} source={notificationIcon} />
          </View>
          <View>
            <Text style={styles.notificationTitle}>{title}</Text>
            <View style={styles.dateBox}>
              <Text style={styles.dateStyle}>{date}</Text>
              <Text style={styles.timeStyle}>{time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
  },
  dateStyle: {
    marginRight: 13,
    color: "#A3A3A3",
    fontSize: 10,
  },
  timeStyle: {
    color: "#A3A3A3",
    fontSize: 10,
  },
  headerSmallDescText: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: "100",
  },
  notificationBoxCard: {
    flexDirection: "row",
    paddingHorizontal: 10,
    padding: 5,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 21,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconNotification: {
    marginRight: 20,
    width: 40,
    height: 40,
  },
  notificationTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  dateBox: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },
});

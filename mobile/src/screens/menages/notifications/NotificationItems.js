import { View, Text, StyleSheet, TouchableOpacity, Image,Button } from "react-native";
import React from "react";
import NotificationProps from "./NotificationProps";
import { Data } from "./NotificationTestFakeData";
import Icon from "react-native-vector-icons/FontAwesome5";
import notificationIcon from "../../../assets/images/iconNotifi.png";

export default function NotificationItems({ title, type_id, date, time }) {
  const maxTitleLength = 30;
  const titleWithMaxLenght = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title;
  return (
    <View>
        <TouchableOpacity
          onPress={() => {
            console.log('Redirect to : ', type_id)
          }}
          style={styles.notificationBoxCard}
        >
          <Image 
            style={styles.iconNotification} 
            source={notificationIcon}
          />
          <View>
            <Text style={styles.notificationTitle}>{titleWithMaxLenght.toUpperCase()}</Text>
            <View style={styles.dateBox}>
              <Text style={styles.dateStyle}>{date}</Text>
              <Text style={styles.timeStyle}>{time}</Text>
            </View>
          </View>
         <Text 
          onPress={() => { console.log('Delete') } }
          style={styles.deleteStyle}>
          <Icon 
            name="trash-alt"
          />
         </Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    backgroundColor: "white",
    width: "100%",
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
    width: "100%",
  },
  notificationBoxCard: {
    flexDirection: "row",
    paddingHorizontal: 10,
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
    height: 80,
    backgroundColor: "#F9F9F9",
    marginBottom: 8,
    padding: 20,
  },
  iconNotification: {
    marginRight: 20,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  notificationTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  dateBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  deleteStyle : {
    color: "red",
    fontWeight: "bold",
    fontSize: 12,
    alignItems: "flex-end",
    position: "absolute",
    right: 0,
    marginRight: 20,
  }
});

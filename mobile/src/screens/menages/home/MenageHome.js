import { ScrollView, StyleSheet, SafeAreaView, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "../navigations/Navbar";
import FooterNav from "../navigations/FooterNav";
import Search from "../search/Search";
import SlidersData from "../pupSliders/SlidersData";
import * as Location from "expo-location";
import Collects from "../collects/Collects";
import Swiper from 'react-native-swiper'

// import GiveFeedbackPopup from "../feedback/GiveFeedbackPopup";

export default function MenageHome({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  //use text to get user location
  let position = "Waiting..";
  if (errorMsg) {
    position = errorMsg;
  } else if (location) {
    position = JSON.stringify(location);
  }

  // log  altitude of location from text
  let latitude = 0;
  if (location) {
    latitude = location.coords.latitude;
  }

  //log longitude of location from text
  let longitude = 0;
  if (location) {
    longitude = location.coords.longitude;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView>
        <Search />
        <Swiper
          removeClippedSubviews={false}
          style={styles.wrapper}
          showsButtons={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {
            SlidersData.map((item, index) => {
              return (
                <View key={index}>
                  <Image source={item.image} style={styles.image} />
                </View>
              )
            })
          }
        </Swiper>
        <Collects navigation={navigation} />
      </ScrollView>
      {/* todo : change he conponent Foter nav to MenageBottomTab  */}
      {/* <FooterNav navigation={navigation} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: 135,
    width: '100%',
  },
  sliderImageBox: {
    width: '93.4%',
    marginTop: 25,
    height: 135,
    borderRadius: 8,
  },
  wrapper: {
    height: 135,
    marginTop: 25,
  },
  image: {
    width: '92.5%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    height: 135,
    resizeMode: 'cover',
  },
  dot: {
    backgroundColor: '#fff',
    opacity: 0.6,
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -15,
  },
  activeDot: {
    backgroundColor: '#53C330',
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -15,
  },
  calloutText: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

import { ScrollView, StyleSheet, SafeAreaView, Text,View } from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "../navigations/Navbar";
import Search from "../search/Search";
import Sliders from "../pupSliders/Sliders";
import Collects from "../collects/Collects";
import * as Location from 'expo-location';
import MapView, { Marker, Callout, Circle, } from 'react-native-maps';

export default function Home({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  //use text to get user location
  let posistion = 'Waiting..';
  if (errorMsg) {
    posistion = errorMsg;
  } else if (location) {
    posistion = JSON.stringify(location);
  }

  // log  altitude of location from text
  let latitude = 0;
  if (location) {
    latitude = location.coords.latitude;
  }
  console.log("Lintituddddddd =>>>>>>>>>>>>>>>>>>", latitude);

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
        <Sliders />
        <Collects navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  calloutText : {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
},
});

import { View, Text,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../navigation/Navbar';
import FooterNav from '../navigation/FooterNav'
import Declaration from '../declarations/Declaration';


export default function CollectorHome({navigation}) {
  return (
    <View style={styles.container}>
        <Navbar  navigation={navigation} />
        <ScrollView>
             <Declaration navigation={navigation} />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'white'
  },
  filterIconBox : {
    position: 'absolute',
    display: 'flex',
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignContent:"flex-end",
    alignItems:"flex-end",
    zIndex: 999,
    height: 50,
    width: 50,
  },
})
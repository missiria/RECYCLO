import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigationState } from '@react-navigation/native';
import homeOuline from '../../../assets/images/home-out.png'
import home from '../../../assets/images/home.png'
import demendOutline from '../../../assets/images/domendOut.png'
import demandeIcon from '../../../assets/images/demandde.png'

import portfOut from '../../../assets/images/portfOut.png'
import portf from '../../../assets/images/portf.png'

import messageOut from '../../../assets/images/messageOut.png'
import message from '../../../assets/images/message.png'
import i18n from "i18next";

export default function FooterNav({ navigation }) {
  const screenName = useNavigationState((state) => state.routes[state.index].name)

  return (
    <View>
      <View style={styles.flexFooter}>
        <TouchableOpacity 
           style={styles.iconBox}
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.iconStyleBold}
            source={screenName == "Home" ? home : homeOuline}
          />
          <Text 
            style={
              screenName == "Home" ? styles.activeTextForIcon : styles.textForIcon
            }>
            {i18n.t("menageNavigationFooter.home")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => navigation.navigate("DeclarationsIndex")}
        >
          <Image
            style={styles.iconStyleBold}
            source={screenName == "DeclarationsIndex" ? demandeIcon : demendOutline}
          />
          <Text 
            style={
              screenName == "DeclarationsIndex" ? styles.activeTextForIcon : styles.textForIcon
            }>
            {i18n.t("menageNavigationFooter.orders")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconBox}
          onPress={() => navigation.navigate('WalletIndex')}>
          <Image
            style={styles.iconStyleBold}
            source={screenName == "WalletIndex" ? portf : portfOut}
          />
          <Text 
            style={
              screenName == "WalletIndex" ? styles.activeTextForIcon : styles.textForIcon
            }>
            {i18n.t("menageNavigationFooter.wallet")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconBox}
          onPress={() => navigation.navigate('Suports')}>
          <Image
            style={styles.iconStyleBold}
            source={screenName == "Suports" ? message : messageOut}
          />
          <Text style={
            screenName == "Suports" ? styles.activeTextForIcon : styles.textForIcon
          }>
            {i18n.t("menageNavigationFooter.message")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  flexFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  iconStyleBold: {
    width: 20,
    height: 20,
  },
  iconHomeStyle: {
    width: 20,
    height: 20,
  },
  iconBox : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textForIcon: {
    fontSize: 9,
    color: '#8E8E8E',
    marginTop: 5,
  },
  activeTextForIcon : {
    fontSize: 10,
    color: '#33CC66',
    marginTop: 5,
    fontWeight:'bold'
  }

})

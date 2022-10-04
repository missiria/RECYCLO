import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProfileIcon from '../../../assets/images/profile-icon.png'
import notificationIcon from '../../../assets/images/notificationlight.png'
import i18n from 'i18next';
import { useIsFocused } from '@react-navigation/native';

export default function Navbar({ navigation, title }) {
  const isFocused = useIsFocused();
  const [rtl, setRtl] = useState(false);
  const rtlBox = i18n.language == "ar" && { flexDirection: 'row-reverse' };
  
    return (
      <View style={styles.container}>
        <View style={[styles.navBar, rtlBox]} >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={ProfileIcon}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.titleNav}>
              {title ? title : "RECYCLOO"}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
              <Image
                style={styles.notifiIcon}
                source={notificationIcon}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.notifiCount}>
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    profileIcon: {
      width: 25,
      height: 25,
    },
    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    navBar: {
      paddingTop: 41,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 10,
      paddingHorizontal: 15,
    },
    followButton1Deasc: {
      marginTop: 10,
      backgroundColor: 'transparent',
      maxWidth: '100%',
      width: 200,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 50,
      color: '#262626',
      fontWeight: 'bold',
      textAlign: "center",
      borderColor: '#33CC66',
      borderWidth: 1,
    },
    followButtonDes: {
      marginTop: 30,
      backgroundColor: '#33CC66',
      maxWidth: '100%',
      width: 200,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 50,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: "center"
    },
    iconStyleBold: {
      fontSize: 26,
      color: '#33CC66',
      alignItems: 'center',
    },
    notifiIcon: {
      width: 22,
      height: 24.17,
    },
    iconStyle: {
      fontSize: 26,
      color: '#A3A3A3',
      alignItems: 'center',
    },
    iconStyle1: {
      fontSize: 26,
      color: '#A3A3A3',

      alignItems: 'center',
    },
    navIcon: {
      fontWeight: '100',
      color: '#000000',
    },
    titleNav: {
      color: '#33CC66',
      fontSize: 17,
      fontFamily: 'MetropoliceMedium',
    },
    modalText: {
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
      maxWidth: '58%',
      color: "#A3A3A3"
    },
    notifiCount: {
      backgroundColor: '#33CC66',
      fontWeight: 'bold',
      width: 11,
      height: 11,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 50,
      color: 'white',
      position: 'absolute',
      top: -3,
      left: 14,
      fontSize: 12,
    },

    imgProfile: {
      width: 86,
      height: 86,
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
    },
    followButton: {
      marginTop: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: "#33CC66",
      borderWidth: 1,
      borderColor: "#dcdcdc",
      height: 50,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    followButton1: {
      marginTop: 10,
      width: 250,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#dcdcdc",
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    followButtonText: {
      color: "#dcdcdc",
      fontSize: 12,
    },
    btnLighted: {
      width: "100%",
      textAlign: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 6,
      marginHorizontal: 35,
      fontWeight: 'bold',
      padding: 15,
      color: 'black',
      marginTop: 10,
      borderColor: '#33CC66',
      borderWidth: 1,
    }
  });
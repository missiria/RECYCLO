import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigationState } from '@react-navigation/native';
import i18n from "i18next";

export default function FooterNav({ navigation }) {
  const screenName = useNavigationState((state) => state.routes[state.index].name)

  return (
    <View>
      <View style={styles.flexFooter}>
        <View>
          <Text style={styles.textBoxIcon} onPress={() => navigation.navigate('CollectorHome')}>
            <Icon
              style={screenName == "CollectorHome" ? styles.iconStyleBold : styles.iconStyle}
              name={screenName == "CollectorHome" ? "home" : "home-outline"}
            />
          </Text>
          <Text
            style={screenName == "CollectorHome" ?
              styles.textUnderIconActive : styles.textUnderIconUnactive
            }>
            {i18n.t('collectorfooterNavigation.home')}
          </Text>
        </View>

        <View>
          <Text style={styles.textBoxIcon} onPress={() => navigation.navigate("CollectorOrders")}>
            <Icon
              style={screenName == "CollectorOrders" ? styles.iconStyleBold : styles.iconStyle}
              name={screenName == "CollectorOrders" ? "clock" : "clock-outline"}
            />
          </Text>
          <Text
            style={screenName == "DeclarationsIndex" ?
              styles.textUnderIconActive : styles.textUnderIconUnactive
            }>
            {i18n.t('collectorfooterNavigation.orders')}
          </Text>
        </View>

        <View>
          <Text style={styles.textBoxIcon} onPress={() => navigation.navigate('CollectorWallet')}>
            <Icon
              style={screenName == "CollectorWallet" ? styles.iconStyleBold : styles.iconStyle}
              name={screenName == "CollectorWallet" ? "wallet" : "wallet-outline"}
            />
          </Text>
          <Text
            style={screenName == "CollectorWallet" ?
              styles.textUnderIconActive : styles.textUnderIconUnactive
            }>
            {i18n.t('collectorfooterNavigation.wallet')}
          </Text>
        </View>


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  containerMain: {

  },
  bottomView: {

  },
  textBoxIcon: {
    textAlign: 'center',
    flexDirection: 'column',
  },
  textUnderIconActive: {
    color: '#4ECB71',
    fontSize: 10,
  },
  textUnderIconUnactive: {
    color: '#828282',
    fontSize: 10,
  },
  flexFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  iconStyle: {
    fontSize: 18,
    color: '#A3A3A3'
  },
  iconStyleBold: {
    fontSize: 18,
    color: '#33CC66',

  },
  iconHomeStyle: {
    fontSize: 18,
    color: '#fff',
  },
  bocahaomeIcon: {
    backgroundColor: '#33CC66',
    width: 37,
    height: 37,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,

    elevation: 3,
  }

})

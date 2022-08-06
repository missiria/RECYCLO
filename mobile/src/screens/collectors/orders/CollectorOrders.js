import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import FooterNav  from '../navigation/FooterNav';
import CollectorOrdersTab from '../../../routes/CollectorOrdersTab';

export default function CollectorOrders({navigation}) {
  return (
    <View style={styles.container}>
      <CollectorOrdersTab />
      <FooterNav navigation={navigation} />
    </View>
  )
}

const styles  = StyleSheet.create({
  container : {
    flex: 1,
  }
})
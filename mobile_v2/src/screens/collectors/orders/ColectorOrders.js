import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import ColectorOrdersTab from '../../../routes/ColectorOrdersTab';

export default function ColectorOrders({navigation}) {
  return (
    <View style={styles.container}>
      <ColectorOrdersTab />
    </View>
  )
}

const styles  = StyleSheet.create({
  container : {
    flex: 1,
  }
})
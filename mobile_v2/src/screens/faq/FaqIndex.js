import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import FaqTabBar from '../../routes/FaqTabBar';

export default function FaqIndex() {
  return (
    <View style={styles.container}>
      <FaqTabBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'white'
  }
})
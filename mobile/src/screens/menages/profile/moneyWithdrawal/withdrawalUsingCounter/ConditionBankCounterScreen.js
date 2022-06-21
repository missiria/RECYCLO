import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import IndexProps from '../ConditionProps';

export default function ConditionBankCounterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <IndexProps
          type="guichet bancaire"
          count="100.00"
          textBtm="Vous recevez un code de retrait via SMS"
          textBtmDesc="En savoir plus"
          icon="cellphone-text"
        />
      </ScrollView>
      <View style={styles.boxBtn}>
        <Text onPress={() => navigation.navigate("InfoBankT")} style={styles.btnNext}>
          Soumettre
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxBtn: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnNext: {
    alignSelf: 'center',
    backgroundColor: '#33CC66',
    padding: 15,
    borderRadius: 7,
    color: 'white',
    fontWeight: 'bold',
    width: "100%",
    textAlign: 'center',
  },
})
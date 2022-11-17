import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import i18next from 'i18next';
import { currencyFormat, useFetch } from '../../../hooks/hooks';
import moment from 'moment';

export default function WithdrawalNotices() {
  const { data } = useFetch("withdrawals", {})
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView>
        {data?.map((item) => (
          <View key={item.id} style={styles.cardBox}>
            <Text style={styles.cardTitle}> {i18next.t('wallet.avis-ret-ob')} {new Date(item.created_at).toLocaleDateString()} </Text>
            <Text style={styles.cardPrice}>{currencyFormat(item.amount)}  {i18next.t('wallet.dh')}</Text>
            <Text style={styles.boxTextWhat}> {i18next.t('wallet.via-gechet')}</Text>
            <Text style={styles.cardTextDesc}> {i18next.t('wallet.code-of-retrait')} : </Text>
            <View style={styles.firstFlexBx}>
              <Text style={styles.cradNumBank}>{item?.withdrawal_code}</Text>
              <Text style={styles.textCopie}>{i18next.t('wallet.copie')}</Text>
            </View>
            <View style={styles.firstFlexBx}>
              <Text>Nom du bank:</Text>
              <Text style={styles.cradNumBank}> {item?.bank.bank_name}</Text>
            </View>
            <View style={styles.bottomCrdBox}>
              <View style={styles.cardFotBox}>
                <Icon
                  style={styles.dateIcon}
                  name="time-slot"
                />
                <Text style={styles.dateText}>{i18next.t('wallet.end-date')} : {moment(item.expires_in).fromNow()} </Text>
              </View>
              <Text style={styles.textAnull}>
              {i18next.t('wallet.cancel')}
              </Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  cardBox: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  boxTextWhat: {
    marginTop: 7,
    fontWeight: 'bold',
    backgroundColor: '#FCF5F5',
    paddingVertical: 20,
    paddingHorizontal: 13,
  },
  firstFlexBx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  bottomCrdBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  cardTitle: {
    marginHorizontal: 15,
    marginTop: 20,
    fontWeight: 'bold'
  },
  cardPrice: {
    marginHorizontal: 15,
    marginTop: 7,
    fontWeight: 'bold',
    color: '#33CC66'
  },
  cardTextDesc: {
    marginHorizontal: 15,
    marginTop: 14,
    fontWeight: 'bold'
  },
  cradNumBank: {
    color: '#33CC66',
    fontWeight: 'bold'
  },
  textCopie: {
    color: '#7C7C7C'
  },
  cardFotBox: {
    flexDirection: 'row',
    maxWidth: 200,
  },
  dateIcon: {
    color: '#33CC66',
    fontSize: 20,
    marginRight: 10
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 12
  },
  textAnull: {
    color: '#7C7C7C'
  },
})
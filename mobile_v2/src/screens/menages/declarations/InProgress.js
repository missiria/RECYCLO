import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/FontAwesome';
import i18n from "i18next";


export default function InProgress() {
  const [details, setDetails] = useState(false);
  const showDetails = () => {
    setDetails(true);
  }

  const hideDetailse = () => {
    setDetails(false);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.TopCard}>

            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.headcontetn}>
                  10-04-2022
                </Text>
                <Text style={styles.headcontetn}>
                  16:15
                </Text>
              </View>
              <TouchableOpacity style={styles.cardHeaderRight}>
                <Text style={styles.headcontetnCnte}>
                {i18n.t("menageDemend.cancel")}
                </Text>
                <Text>
                  <Icond
                    style={styles.headcontetIcon}
                    name='undo'
                  />
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              onPress={details ? hideDetailse : showDetails } 
              style={styles.cardcenter}
            >
              <Text style={styles.detailText}>
                {i18n.t("menageDemend.details")}
              </Text>
              <Text>
                <Icon
                  style={styles.detailIcon}
                  name="chevron-thin-up"
                />
              </Text>
            </TouchableOpacity>

            <View  style={details ? styles.contetnBody : styles.detailsHide}>
              <View style={styles.clientInfo}>
                <Text>
                  {i18n.t("menageDemend.type")}
                </Text>
                <Text>
                  Vêtements
                </Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>
                {i18n.t("menageDemend.qty")}
                </Text>
                <Text>10.00 kg</Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>
                {i18n.t("menageDemend.price")}
                </Text>
                <Text>0.50 Dh</Text>
              </View>
              <View style={styles.breakLineMini}></View>
              <View style={styles.clientsDetails}>
                <Text style={styles.clientsUsername}>
                {i18n.t("menageDemend.dh-total")}
                </Text>
                <Text style={styles.dirh}>5 {i18n.t("menageDemend.dh")}</Text>
              </View>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.textPay}>
              {i18n.t("menageDemend.total")}
              </Text>
              <Text style={styles.textTotal}>
                500
              </Text>
            </View>

            <Text style={styles.buton}>
            {i18n.t("menageDemend.wait")}
            </Text>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopCard: {
    backgroundColor: 'white',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headcontetn: {
    color: '#A3A3A3',
    marginRight: 10
  },
  headcontetnCnte: {
    color: 'black',
    marginRight: 10,
  },
  headcontetIcon: {
    color: 'black',
    fontSize: 16,
  },
  cardcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  detailText: {
    fontWeight: 'bold'
  },
  detailIcon: {
    fontSize: 14,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  textPay: {
    fontWeight: 'bold',
  },
  textTotal: {
    color: '#33CC66',
    fontWeight: 'bold',
    fontSize:17,
  },
  buton: {
    marginTop: 15,
    textAlign: 'center',
    backgroundColor: '#5B68F6',
    borderRadius: 5,
    padding: 9,
    color: 'white'
  },
  contetnBody : {
    marginTop:12,
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  clientInfo : {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  clientsUsername : {
    fontWeight:'bold',
  },
  clientsDetails : {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:15,
  },
  detailsHide : {
    display: 'none'
  },
  breakLineMini : {
    width: "100%",
    borderColor:'#A3A3A3',
    borderStyle: 'dashed',
    borderWidth: 0.2,
    marginTop: 15,
  },
  dirh : {
    color: '#33CC66',
    fontWeight: 'bold',
  },
})
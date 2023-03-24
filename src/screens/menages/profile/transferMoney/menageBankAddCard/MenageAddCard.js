import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import addCard from '../../../../../assets/images/adc.png'
import SuccessCard from '../../../../../assets/images/adcd.png'
import Icon from 'react-native-vector-icons/Entypo'

export default function MenageAddCard({navigation}) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.titleBigText}>
              Selectioner votre carte
            </Text>
            <TouchableOpacity style={styles.addCardBox}>
              <View style={styles.cardLeftBox}>
                <Image
                  style={styles.iconAddCard}
                  source={SuccessCard}
                />
                <Text style={styles.addCardDesc}>
                  8234 **** **** 3292
                </Text>
              </View>
              <View>
                <Switch
                  trackColor={{ false: "#767577", true: "#33CC66" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </TouchableOpacity>
          </View>


          <View>
            <Text style={styles.titleBigText}>
              Ajouter une nouvelle carte
            </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate("AddCardInfo")}
              style={styles.addCardBox}>
              <View style={styles.cardLeftBox}>
                <Image
                  style={styles.iconAddCard}
                  source={addCard}
                />
                <Text style={styles.addCardDesc}>
                  Ajouter une nouvelle carte
                </Text>
              </View>
              <View>
                <Icon
                  style={styles.addCardIcon}
                  name="squared-plus"
                />
              </View>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
      <View style={styles.btnFooter}>
        <Text
          onPress={isEnabled ? () => navigation.navigate("DataBankConfirmation") : null}
          style={isEnabled ? styles.buttonBtn : styles.DsblbuttonBtn}>
          valider
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
  addCardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconAddCard: {
    width: 35,
    height: 30,
    marginRight: 20,
  },
  addCardDesc: {
    fontSize: 13,
  },
  addCardIcon: {
    color: '#33CC66',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleBigText: {
    marginTop: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  buttonBtn: {
    marginTop: 20,

    backgroundColor: '#4ECB71',
    color: '#fff',
    fontSize: 15,
    padding: 14,
    borderRadius: 5,
    textAlign: 'center',
  },

  btnFooter: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  DsblbuttonBtn : {
    marginTop: 20,

    backgroundColor: '#C4C4C4',
    color: '#fff',
    fontSize: 15,
    padding: 14,
    borderRadius: 5,
    textAlign: 'center',
  },
})
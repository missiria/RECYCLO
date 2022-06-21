import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

import { typeWastData, cityData, periodData } from './FilterData';


export default function Filter({ navigation }) {
  const [selected, setSelected] = useState("08:00 - 12:00")
  const [waste, setWaste] = useState("Type de déchets");
  const [city, setCity] = useState("");
  const [period, setPeriod] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.scrollView}>
          <Text style={styles.textTitle}>Descreption</Text>
          <View style={styles.cards}>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={waste}
                onValueChange={(itemValue, itemIndex) => setWaste(itemValue)}
              >
                {typeWastData.map(item => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={city}
                onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
              >
                {cityData.map(item => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={period}
                onValueChange={(itemValue, itemIndex) => setPeriod(itemValue)}
              >
                {periodData.map(item => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
          </View>
          <View
            style={styles.horizontalLineBreack}
          />
          <Text style={styles.textTitle}>
            à quelle heure souhaitez-vous collecter
            vos déchets ?
          </Text>
          <View style={styles.cardsTimes}>
            <TouchableOpacity
              onPress={() => setSelected("08:00 - 12:00")}
              style={
                selected == "08:00 - 12:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                08:00 - 12:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("12:00 - 16:00")}
              style={
                selected == "12:00 - 16:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                12:00 - 16:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("16:00 - 20:00")}
              style={
                selected == "16:00 - 20:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                16:00 - 20:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("20:00 - 00:00")}
              style={
                selected == "20:00 - 00:00" ?
                  styles.activetimeBox : styles.timeBox
              }>
              <Text style={styles.textCardTimeBox} >
                20:00 - 00:00
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttinsBox}>
            <TouchableOpacity>
              <Text style={styles.buttonReset}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonNext} >
                Appliquer
              </Text>
            </TouchableOpacity>
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
  scrollView: {
    marginHorizontal: 20,
  },
  cards: {
    marginTop: 21
  },
  cardBox: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    marginBottom: 13,
  },
  textTitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 15
  },
  horizontalLineBreack: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginTop: 20
  },
  cardsTimes: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  activetimeBox: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#4ECB71',
    padding: 10,
    width: "48%",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#E2FFEC',
  },
  timeBox: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 10,
    width: "48%",
    marginBottom: 10,
    borderRadius: 5,
  },
  textCardTimeBox: {
    textAlign: 'center'
  },
  buttinsBox: {
    marginTop: 50,
    marginBottom: 30
  },
  buttonReset: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 12,
    borderRadius: 5,
  },
  buttonNext: {
    textAlign: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#33CC66',
    color: 'white',
  },
})
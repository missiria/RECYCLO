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
import { defaultValue, handleSubmit, schema } from './services/Filter.services'
import { Formik } from 'formik';

export default function Filter({ navigation }) {
  const [selected, setSelected] = useState("08:00 - 12:00");

  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values, navigation)}
    >
      {props => (
        <View style={styles.container}>
          <ScrollView >
            <View style={styles.scrollView}>
              <Text style={styles.textTitle}>Descreption</Text>
              <View style={styles.cards}>
                {props.errors.type && props.touched.type ? (
                  <Text style={styles.error}>{props.errors.type}</Text>
                ) : null}
                <View style={styles.cardBox}>
                  <Picker
                    selectedValue={props.values.type}
                    onValueChange={props.handleChange('type')}
                  >
                    <Picker.Item
                      label="Select Type"
                      value=''
                    />
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
                {props.errors.city && props.touched.city ? (
                  <Text style={styles.error}>{props.errors.city}</Text>
                ) : null}
                <View style={styles.cardBox}>
                  <Picker
                    selectedValue={props.values.city}
                    onValueChange={props.handleChange('city')}
                  >
                    <Picker.Item
                      label="Select City"
                      value=''
                    />
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
                {props.errors.time && props.touched.time ? (
                  <Text style={styles.error}>{props.errors.time}</Text>
                ) : null}
                <View style={styles.cardBox}>
                  <Picker
                    selectedValue={props.values.time}
                    onValueChange={props.handleChange('time')}
                  >
                    <Picker.Item
                      label="Select Period"
                      value=''
                    />
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
                <TouchableOpacity
                  onPress={props.resetForm}
                >
                  <Text style={styles.buttonReset}>
                    Reset
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonNext} >
                    Appliquer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
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
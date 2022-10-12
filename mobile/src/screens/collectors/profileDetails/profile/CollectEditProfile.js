import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons'
import { Formik } from "formik";


// Services
import { handleAuth, schemaValidation, defaultValues } from "./services/CollectEditProfile.services";

export default function CollectEditProfile({ navigation }) {
  const [checked, setChecked] = useState('sex');

  return (
    <View style={styles.containerOne}>
      <ScrollView>
        <Formik
          initialValues={defaultValues}
          // validationSchema={schemaValidation}
          onSubmit={(values) => handleAuth(values, navigation)}
        >
          {(props) => (
            <View >
              <View style={styles.container}>


                <View style={{ marginTop: 30 }}>
                  <Text>A prpos De vous</Text>

                  <TextInput
                    style={[
                      styles.textInput, props.errors.first_name
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                    placeholderTextColor="#7C7C7C"
                    placeholder="Nom"
                    onChangeText={props.handleChange("first_name")}
                    value={props.values.first_name}
                    onBlur={props.handleBlur("first_name")}
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.first_name}</Text>
                  <TextInput
                    style={[
                      styles.textInput, props.errors.last_name
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                    placeholderTextColor="#7C7C7C"
                    placeholder="Prenom"
                    onChangeText={props.handleChange("last_name")}
                    value={props.values.last_name}
                    onBlur={props.handleBlur("last_name")}
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.last_name}</Text>
                  <TextInput
                    style={[
                      styles.textInput, props.errors.email
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                    placeholderTextColor="#7C7C7C"
                    placeholder="Email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.email}</Text>
                  <TextInput
                    style={[
                      styles.textInput, props.errors.phone
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                    placeholderTextColor="#7C7C7C"
                    placeholder="Phone"
                    onChangeText={props.handleChange("phone")}
                    value={props.values.phone}
                    onBlur={props.handleBlur("phone")}
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.phone}</Text>
                  <TextInput
                    style={[styles.textInput,
                    props.errors.cin
                      ? { borderColor: "red", borderWidth: 1 }
                      : null,
                    ]}
                    placeholderTextColor="#7C7C7C"
                    placeholder="CIN"
                    onChangeText={props.handleChange("cin")}
                    value={props.values.cin}
                    onBlur={props.handleBlur("cin")}
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.cin}</Text>
                </View>

                <View style={styles.breakLine}></View>
                <View style={{ marginTop: 30 }}>
                  <Text>Ou Vivez Vous</Text>
                  <View style={styles.zipBox}>
                    <View style={[
                      styles.placeINcity,
                      props.errors.city
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}>
                      <Picker
                        selectedValue={props.values.city}
                        onValueChange={props.handleChange("city")}
                        style={styles.placeSelect}
                      >
                        <Picker.Item label="City" value="" />
                        <Picker.Item label="Agadir" value="Agadir" />
                        <Picker.Item label="Taroudant" value="Taroudant" />
                      </Picker>
                    </View>
                    <Text style={{ color: "red", marginTop: 2 }}>{props.errors.city}</Text>
                  </View>
                  <TextInput
                    style={[
                      styles.textInput, props.errors.country
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                    onChangeText={props.handleChange("address")}
                    value={props.values.address}
                    onBlur={props.handleBlur("address")}
                    placeholder="Address"
                  />
                  <Text style={{ color: "red", marginTop: 2 }}>{props.errors.address}</Text>
                </View>

        

                <View style={styles.breakLine}></View>

                <View style={{ marginTop: 30 }}>
                  <Text>Date De Naissance</Text>
                  <View style={[
                    styles.dateBerth,
                    props.errors.birth_day ||
                      props.errors.birth_month ||
                      props.errors.birth_year
                      ? { borderColor: "red", borderWidth: 1 }
                      : null,
                  ]}>
                    <TextInput
                      style={{ fontWeight: 'bold' }}
                      placeholder='DD'
                      keyboardType="numeric"
                      maxLength={2}
                      onChangeText={props.handleChange("birth_day")}
                      value={props.values.birth_day}
                      onBlur={props.handleBlur("birth_day")}

                    />
                    <TextInput
                      style={styles.leftBordTextInp}
                      placeholder='MM'
                      keyboardType="numeric"
                      maxLength={2}
                      onChangeText={props.handleChange("birth_month")}
                      value={props.values.birth_month}
                      onBlur={props.handleBlur("birth_month")}
                    />
                    <TextInput
                      style={{ fontWeight: 'bold' }}
                      placeholder='YYY'
                      keyboardType="numeric"
                      maxLength={4}
                      onChangeText={props.handleChange("birth_year")}
                      value={props.values.birth_year}
                      onBlur={props.handleBlur("birth_year")}
                    />
                  </View>
                  <Text style={{ color: "red", marginTop: 1 }}> {props.errors.birth_day} </Text>
                  <Text style={{ color: "red", marginTop: 1 }}> {props.errors.birth_month} </Text>
                  <Text style={{ color: "red", marginTop: 1 }}> {props.errors.birth_year} </Text>
                </View>
                <View style={{ marginTop: 40 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Changer le mot de passe</Text>
                  <Text style={{ color: '#7C7C7C' }}>Tapez votre ancien mot de passe et tapez le nouveau mot de passe et confirmez-le</Text>

                  <View style={styles.passBox}>
                    <View style={{ padding: 30, }}>
                      <Text style={{ color: '#7C7C7C' }}>Ancien Mot De Passe</Text>
                      <Text style={{ color: "red", marginTop: 2 }}>{props.errors.current_password}</Text>
                      <View style={styles.textPassBx}>
                        <Icon
                          style={{ fontSize: 40, color: '#A3A3A3', marginRight: 20, marginLeft: -13 }}
                          name="lock"
                        />
                        <TextInput
                          style={{ color: '#262626', }}
                          placeholder='Current Password'
                          secureTextEntry
                          onChangeText={props.handleChange("current_password")}
                          value={props.values.current_password}
                          onBlur={props.handleBlur("current_password")}
                        />
                      </View>
                    </View>
                    <Text style={{ height: 0.5, width: "100%", backgroundColor: "#A3A3A3" }}></Text>
                    <View style={{ padding: 30, }}>
                      <Text style={{ color: '#7C7C7C' }}>Nouveau Mot De Passe</Text>
                      <Text style={{ color: "red", marginTop: 2 }}>{props.errors.new_password}</Text>
                      <View style={styles.textPassBx}>
                        <Icon
                          style={{ fontSize: 40, color: '#A3A3A3', marginRight: 20, marginLeft: -13 }}
                          name="lock"
                        />
                        <TextInput
                          style={{ color: '#262626', }}
                          placeholder='New Password'
                          secureTextEntry
                          onChangeText={props.handleChange("new_password")}
                          value={props.values.new_password}
                          onBlur={props.handleBlur("new_password")}
                        />
                      </View>
                    </View>
                    <Text style={{ height: 0.5, width: "100%", backgroundColor: "#A3A3A3" }}></Text>
                    <View style={{ padding: 30, }}>
                      <Text style={{ color: '#7C7C7C' }}>Confirmer Le Nouveau Mot De Passe</Text>
                      <Text style={{ color: "red", marginTop: 2 }}>{props.errors.confirm_password}</Text>

                      <View style={styles.textPassBx}>
                        <Icon
                          style={{ fontSize: 40, color: '#A3A3A3', marginRight: 20, marginLeft: -13 }}
                          name="lock"
                        />
                        <TextInput
                          style={{ color: '#262626', }}
                          placeholder='Retype Password '
                          secureTextEntry
                          onChangeText={props.handleChange("confirm_password")}
                          value={props.values.confirm_password}
                          onBlur={props.handleBlur("confirm_password")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.btnSaved}>
                <Text
                  onPress={props.handleSubmit}
                  style={styles.btnSave}>
                  Enregistrer
                </Text>
                <Text
                  style={styles.btnDefault} onPress={() => props.resetForm()} >
                  Réinitialiser
                </Text>
              </View>
            </View>
          )
          }
        </Formik >
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 20,
  },
  profileImgCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
    padding: 20,
    marginTop: 20
  },
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectBoxS: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProfile: {
    width: 86,
    height: 86,
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  uploadImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  breakLine: {
    height: 9,
    backgroundColor: '#F3F3F3',
    marginTop: 30,
  },
  placeSelectBpx: {
    padding: 1,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,

    fontWeight: 'bold',
    color: 'black'
  },
  placeSelect: {
    fontWeight: 'bold',
    color: 'black'
  },
 
  placeINcity: {
    padding: 1,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,

    fontWeight: 'bold',
    color: 'black',
    width: "100%",
    marginRight: 18,
  },
  inputZip: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    width: "47%",
  },
  dateBerth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  leftBordTextInp: {
    borderLeftColor: 'lightgray',
    borderRightColor: 'lightgray',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold'
  },
  passBox: {
    marginTop: 30,
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: 'white',
    width: "100%"
  },
  textPassBx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },

  btnSaved: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  btnSave: {
    backgroundColor: '#33CC66',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 38,
  },
  btnDefault: {
    backgroundColor: '#ECECEC',
    color: '#262626',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 38,
  },

})
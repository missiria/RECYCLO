import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import imgItisalat from "../../../assets/images/tt.png"
import { Formik } from "formik";

// Services
import { handleAuth, schemaValidation, defaultValues } from "./services/recharge.services";


export default function ChooseTypeRecharge({ navigation }) {
    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={schemaValidation}
            onSubmit={(values) => handleAuth(values, navigation)}
        >
            {(props) => (
                <View style={styles.container}>

                    <ScrollView>
                        <View style={styles.mainContent}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rechargez votre téléphone</Text>
                            <Text style={{ marginTop: 16, fontSize: 15, marginBottom: 10 }}>Nos partenaires</Text>
                            <Image
                                source={imgItisalat}
                            />
                            <View style={{ marginTop: 20 }}>
                                <Text >Opérateur</Text>
                                <View style={[styles.dropDownBox, props.errors.operator
                                    ? { borderColor: "red", borderWidth: 1 }
                                    : null]}>
                                    <Icon
                                        style={{ color: '#A3A3A3', fontSize: 20 }}
                                        name="access-point"
                                    />
                                    <Picker
                                        style={{ flex: 1 }}
                                        selectedValue={props.values.operator}
                                        onValueChange={props.handleChange("operator")}
                                    >
                                        <Picker.Item label="Select Company" value="" />
                                        <Picker.Item label="Maroc Telecom" value="MarocTelecom" />
                                        <Picker.Item label="Inwi" value="Inwi" />
                                        <Picker.Item label="Orange" value="Orange" />
                                    </Picker>
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.operator}</Text>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text >Numéro de téléphone</Text>
                                <View style={[styles.dropDownBox, props.errors.phone
                                    ? { borderColor: "red", borderWidth: 1 }
                                    : null]}>
                                    <Icon
                                        style={{ color: '#A3A3A3', fontSize: 20, marginRight: 15 }}
                                        name="cellphone"
                                    />
                                    <TextInput
                                        style={{ flex: 1, paddingVertical: 10 }}
                                        keyboardType="numeric"
                                        placeholder="Phone Number"
                                        onChangeText={props.handleChange("phone")}
                                        value={props.values.phone}
                                        onBlur={props.handleBlur("phone")}
                                    />
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.phone}</Text>
                            </View>

                            <View style={{ marginTop: 20, marginBottom: 30 }}>
                                <Text >Montant</Text>
                                <View style={[styles.dropDownBox, props.errors.prix
                                    ? { borderColor: "red", borderWidth: 1 }
                                    : null]}>
                                    <Icon
                                        style={{ color: '#A3A3A3', fontSize: 20 }}
                                        name="cash"
                                    />
                                    <Picker
                                        style={{ flex: 1, color: '#33CC66', fontWeight: 'bold' }}
                                        selectedValue={props.values.prix}
                                        onValueChange={props.handleChange("prix")}
                                    >
                                        <Picker.Item label="Selectioner Le Prix" value="" />
                                        <Picker.Item label="10 Dhs" value="10" />
                                        <Picker.Item label="20 Dhs" value="20" />
                                        <Picker.Item label="25 Dhs" value="25" />
                                        <Picker.Item label="30 Dhs" value="30" />
                                        <Picker.Item label="50 Dhs" value="50" />
                                        <Picker.Item label="100 Dhs" value="100" />
                                        <Picker.Item label="150 Dhs" value="150" />
                                        <Picker.Item label="300 Dhs" value="300" />
                                        <Picker.Item label="500 Dhs" value="500" />
                                    </Picker>
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.prix}</Text>
                            </View>

                        </View>
                    </ScrollView>


                    <View style={styles.boxBtn}>
                        <Text
                            onPress={props.handleSubmit}
                            style={styles.btnNext}>
                            Soumettre
                        </Text>
                    </View>
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
    mainContent: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    dropDownBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        paddingHorizontal: 20,
        marginTop: 6
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
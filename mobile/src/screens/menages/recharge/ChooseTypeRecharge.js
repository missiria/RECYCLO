import { View, Text, ScrollView, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import imgItisalat from "../../../assets/images/tt.png"
import { Formik } from "formik";

// Services
import { handleAuth, schemaValidation, defaultValues } from "./services/recharge.services";
import { useFetch } from '../../../hooks/hooks';


const items = [
    {label: "10 Dhs", value: "10"},
    {label: "25 Dhs", value: "25"},
    {label: "30 Dhs", value: "30"},
    {label: "50 Dhs", value: "50"},
    {label: "100 Dhs", value: "100"},
    {label: "150 Dhs", value: "150"},
    {label: "500 Dhs", value: "500"},
]

export default function ChooseTypeRecharge({ navigation, route }) {
    const amount = /* route.params.amount */ 2000 // * simulate that we have 2000.00 dh

    const [isLoading, setIsLoading] = useState(false)
    const [picker_items, setPicker_items] = useState(items)
    useEffect(() => {
        setPicker_items(
            items.filter((v) => v.value <= amount)
        )
    }, [items])

    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={schemaValidation}
            onSubmit={(values) => handleAuth(values, navigation, setIsLoading)}
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
                                        <Picker.Item label="Maroc Telecom" value="IAM" />
                                        <Picker.Item label="Inwi" value="INWI" />
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
                                    {console.log(props.errors)}
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.phone}</Text>
                            </View>

                            <View style={{ marginTop: 20, marginBottom: 30 }}>
                                <Text >Montant</Text>
                                <View style={[styles.dropDownBox, props.errors.amount
                                    ? { borderColor: "red", borderWidth: 1 }
                                    : null]}>
                                    <Icon
                                        style={{ color: '#A3A3A3', fontSize: 20 }}
                                        name="cash"
                                    />
                                    <Picker
                                        style={{ flex: 1, color: '#33CC66', fontWeight: 'bold' }}
                                        selectedValue={props.values.amount}
                                        onValueChange={props.handleChange("amount")}
                                    >
                                        <Picker.Item label="Selectioner Le Prix" value="" />
                                        {picker_items.map((item) => (
                                            <Picker.Item key={item.value} label={item.label} value={item.value} />
                                        ))}
                                    </Picker>
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.amount}</Text>
                            </View>

                            <View style={{ marginTop: 20, marginBottom: 30 }}>
                                <Text >Type de recharge</Text>
                                <View style={[styles.dropDownBox, props.errors.type
                                    ? { borderColor: "red", borderWidth: 1 }
                                    : null]}>
                                    <Icon
                                        style={{ color: '#A3A3A3', fontSize: 20 }}
                                        name="cash"
                                    />
                                    <Picker
                                        style={{ flex: 1, color: '#33CC66', fontWeight: 'bold' }}
                                        selectedValue={props.values.type}
                                        onValueChange={props.handleChange("type")}
                                    >
                                        <Picker.Item label="Selectioner Le type de recharge" value="" />
                                        {[
                                            { label: "Sold", value: 'BALANCE' },
                                            { label: "Minutes", value: 'MINUTES' },
                                            { label: "Internet", value: 'INTERNET' },
                                        ].map((item) => (
                                            <Picker.Item key={item.value} label={item.label} value={item.value} />
                                        ))}
                                    </Picker>
                                </View>
                                <Text style={{ color: "red", marginTop: 2 }}>{props.errors.amount}</Text>
                            </View>

                        </View>
                    </ScrollView>


                    <View style={styles.boxBtn}>
                        <Text
                            onPress={props.handleSubmit}
                            style={styles.btnNext}>
                            {isLoading ? <ActivityIndicator color={'#fff'} size='small' /> : "Soumettre"}
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
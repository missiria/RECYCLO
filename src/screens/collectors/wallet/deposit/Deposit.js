import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFetch } from '../../../../hooks/hooks'
import { Picker } from '@react-native-picker/picker'

const values = [
    { label: "100 DH", value: 100 },
    { label: "200 DH", value: 200 },
    { label: "300 DH", value: 300 },
    { label: "400 DH", value: 400 },
    { label: "500 DH", value: 500 },
    { label: "700 DH", value: 700 },
    { label: "800 DH", value: 800 },
    { label: "900 DH", value: 900 },
    { label: "1000 DH", value: 1000 },
]

export default function Deposit({ navigation, route }) {

    const { action } = route.params
    const [value, setValue] = useState()
    const [bank, setBank] = useState()

    // TODO : We should use it as a service and add TU's
    const { data: banks } = useFetch("banks/all", {
        method: 'GET',
    })

    return (
        <View
            style={styles.container}
            keyboardShouldPersistTaps='always'>
            <ScrollView>
                <View>
                    <View>
                        <Text style={styles.titleText}>
                            Déposer de l'argent
                        </Text>
                        <Text style={styles.destText}>
                            Combien d'argent voudriez-vous Déposer?
                        </Text>
                    </View>
                    <View style={styles.viewPickerParent} >
                        <Text style={styles.viewPickerLabel} >Selectionner votre bank</Text>
                        <View style={styles.viewPicker} >
                            <Picker
                                selectedValue={bank}
                                onValueChange={(itemValue, itemIndex) => {
                                    setBank(itemValue)
                                }}
                            >
                                {banks?.map(item => (
                                    <Picker.Item
                                        label={item.bank_name}
                                        value={item.id}
                                        key={item.id}
                                    />
                                    )
                                )}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.viewPickerParent} >
                        <Text style={styles.viewPickerLabel} >Selectionér un montant</Text>
                        <View style={styles.viewPicker} >
                            <Picker
                                selectedValue={value}
                                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                            >
                                {values?.map(item => (
                                    <Picker.Item
                                        label={item.label}
                                        value={item.value}
                                        key={item.value}
                                    />
                                )
                                )}
                            </Picker>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btnFooter}>
                <Text
                    onPress={() => navigation.navigate("CollectorBankDetails", { action, value, bank })}
                    style={styles.buttonBtn}>
                    valider
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 19,
    },
    destText: {
        marginHorizontal: 20,
        fontSize: 12,
    },
    // * Picker
    viewPickerParent: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    viewPickerLabel: {

    },
    viewPicker: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 13,
    },
    theIntputs: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 60,
    },
    input: {
        fontSize: 30,
        marginRight: 10,
        color: '#33CC66',
        width: 50,
        fontWeight: 'bold'
    },
    dh: {
        color: '#33CC66',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardsBoxs: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    cardBox: {
        backgroundColor: '#F8F8F8',
        padding: 10,
        paddingHorizontal: 14,
        borderRadius: 5,
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
});
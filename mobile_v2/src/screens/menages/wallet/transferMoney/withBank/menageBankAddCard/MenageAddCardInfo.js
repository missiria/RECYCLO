import { View, Text, Image, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import bankIcons from '../../../../../../assets/images/bi.png'
import { defaultValues, handleSubmit, schema } from '../../services/MenageAddCardInfo.services'
import { Formik } from 'formik'


export default function AddCardInfo({ navigation }) {
    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={(values) => handleSubmit(values, navigation)}
        >
            {(props) => (
                <View style={styles.container}>
                    <ScrollView>
                        <View>
                            <View>
                                <Text style={styles.bigTitleText}>
                                    Ajouter une nouvelle carte
                                </Text>
                                <View>
                                    <Text style={styles.formTextDesLabel}>  
                                        Nom sur la carte
                                    </Text>
                                    <TextInput
                                        placeholder="Nom de la carte"
                                        placeholderTextColor="#A3A3A3"
                                        style={styles.nameCrds}
                                        onChangeText={props.handleChange('cart_name')}
                                        value={props.values.cart_name}
                                    />
                                    {props.errors.cart_name ? (
                                        <Text style={[styles.error]}>{props.errors.cart_name}</Text>
                                    ) : null}
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.formTextDesLabel}>
                                        Numéro de la carte
                                    </Text>
                                    <View style={styles.nameCrdsNum}>
                                        <TextInput
                                            style={styles.numInputCard}
                                            onChangeText={props.handleChange("num_rib_bank")}
                                            value={props.values.num_rib_bank}
                                            placeholder="0000 0000 0000 0000"
                                            placeholderTextColor="#A3A3A3"
                                            maxLength={24}
                                            keyboardType="numeric"
                                        />
                                        <Icon
                                            style={styles.cardCridetIcon}
                                            name="credit-card"
                                        />
                                    </View>
                                    {props.errors.num_rib_bank ? (
                                        <Text style={[styles.error]}>{props.errors.num_rib_bank}</Text>
                                    ) : null}
                                </View>
                            </View>
                            <View style={styles.datesOfCards}>
                                <View>
                                    <View>
                                        <Text style={styles.formTextDesLabel}>
                                            Date d'expiration
                                        </Text>
                                        <TextInput
                                            value={props.values.end_date}
                                            onChangeText={props.handleChange("end_date")}
                                            placeholder="MM/YY"
                                            placeholderTextColor="#A3A3A3"
                                            style={[styles.nameCrdsDates, { marginRight: 77 }]}
                                            keyboardType="phone-pad"
                                            maxLength={5}
                                        />
                                        {props.errors.end_date ? (
                                        <Text style={[styles.error]}>{props.errors.end_date}</Text>
                                    ) : null}
                                    </View>
                                </View>

                                <View>
                                    <View>
                                        <Text style={styles.formTextDesLabel}>
                                            Code de vérification
                                        </Text>
                                        <TextInput
                                            onChangeText={props.handleChange("codeVerify")}
                                            value={props.values.codeVerify}
                                            placeholder="123"
                                            keyboardType="numeric"
                                            placeholderTextColor="#A3A3A3"
                                            style={styles.nameCrdsDates}
                                            maxLength={3}
                                        />
                                         {props.errors.codeVerify ? (
                                        <Text style={[styles.error]}>{props.errors.codeVerify}</Text>
                                    ) : null}
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={styles.bankIcons}
                                    source={bankIcons}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.btnFooter}>
                        <Text
                            onPress={() => props.handleSubmit()}
                            style={props.isValid ? styles.buttonBtn : styles.DsblbuttonBtn}>
                            valider
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
    bigTitleText: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
    },
    formTextDesLabel: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    nameCrds: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#A3A3A3',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    numInputCard: {
        fontWeight: 'bold',
    },
    nameCrdsNum: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#A3A3A3',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardCridetIcon: {
        marginRight: 20,
        fontSize: 20,
    },
    nameCrdsDates: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#A3A3A3',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        width: "95%",
        marginRight: 30,
    },
    datesOfCards: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankIcons: {
        alignSelf: 'center',
        width: 140,
        height: 30,
        marginTop: 60,
        marginBottom: 20,
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
    DsblbuttonBtn: {
        marginTop: 20,

        backgroundColor: '#C4C4C4',
        color: '#fff',
        fontSize: 15,
        padding: 14,
        borderRadius: 5,
        textAlign: 'center',
    },
    error : {
        color : "red",
        fontSize: 12,
        marginHorizontal : 20,
    }

});
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import cashIcon from '../../../assets/images/cashmony.png';
import Icon from 'react-native-vector-icons/Ionicons';


export default function PaymentsDetails({ navigation, route }) {

    const { declaration } = route.params;
    const total = (declaration.collect.point / 100) * declaration.quantity;
    const faris = total * 0.1;

    const onSubmitPayment = () => {


        navigation.navigate('Successyment')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBox}>
                    <View>
                        <Image
                            source={cashIcon}
                            style={styles.iconImg}
                        />
                        <Text style={styles.textDesc}>
                            Recycloo retient le montant de la collection
                            sur notre compte jusqu'à ce que vous
                            complétiez votre opération
                        </Text>
                    </View>

                    <View style={styles.cardPayBox}>
                        <Text style={styles.contetnTextTtile}>Détails de paiment :</Text>
                        <View style={styles.cardContent}>
                            <View style={styles.cardBody}>
                                <Text>Type :</Text>
                                <Text style={styles.textBoldFlex}>Vêtements</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Text>Quantity :</Text>
                                <Text
                                    style={styles.textBoldFlex}>
                                    {declaration.quantity} kgs
                                </Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Text>Prix :</Text>
                                <Text
                                    style={styles.textBoldFlex}>
                                    {declaration.collect.point / 100 } Dhs
                                </Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Text style={{ color: '#5B68F6' }}>Frais de transaction : </Text>
                                <Text
                                    style={[styles.textBoldFlex, { color: '#5B68F6' }]}>
                                    {faris} Dhs
                                </Text>
                            </View>
                            <View style={styles.beackLine}></View>
                            <View style={styles.cardFooter}>
                                <Text style={styles.textFotterRight}>Montant a payée : </Text>
                                <Text
                                    style={styles.textFotterLeft}>
                                    {total + faris} Dhs

                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.alertMsgBox}>
                        <Text style={styles.alertMsg}>
                            10% de déduction pour chaque transaction
                        </Text>
                        <Icon
                            name='ios-alert-circle-outline'
                            style={styles.alertIcon}
                        />
                    </View>
                </View>
                <View style={styles.btnFooter}>
                    <Text
                        onPress={onSubmitPayment}
                        style={styles.buttonBtn}>
                        valider
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardPayBox: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contetnTextTtile: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContent: {
        marginTop: 10,
    },
    containerBox: {
        marginHorizontal: 20,
    },
    iconImg: {
        width: 150,
        height: 150,
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 35,
    },
    textDesc: {
        fontSize: 13,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 15,
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,

    },
    textBoldFlex: {
        fontWeight: 'bold',
    },
    beackLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        marginBottom: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textFotterRight: {
        fontWeight: 'bold',
        color: 'black',
    },
    textFotterLeft: {
        fontWeight: 'bold',
        color: '#33CC66',
    },

    alertMsgBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#F0F1F9',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    alertMsg: {
        fontSize: 12,
        color: '#5B68F6',
        marginRight: 10,
    },
    alertIcon: {
        fontSize: 22,
        color: '#5B68F6',
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
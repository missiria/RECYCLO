import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SuccessCard from '../../../../assets/images/adcd.png'
import Icon from 'react-native-vector-icons/Entypo'
import Icond from 'react-native-vector-icons/FontAwesome'

export default function DataBankConfirmation({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.textTilteBold}>
                        Détail de la transaction
                    </Text>
                    <View style={styles.firstBox}>
                        <View style={styles.cadrHeaderDate}>
                            <Text>
                                Date
                            </Text>
                            <Text style={styles.date}>
                                01 Mai 2022
                            </Text>
                        </View>
                        <View style={styles.breakLine}></View>
                        <View style={styles.firstCardFooter}>
                            <Text style={styles.monatan}>
                                Montant
                            </Text>
                            <Text style={styles.price}>
                                200 Dh
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.textTilteBold}>
                        Détail de la transaction
                    </Text>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("AddCardInfo")}
                            style={styles.addCardBox}>
                            <View style={styles.cardLeftBox}>
                                <Image
                                    style={styles.iconAddCard}
                                    source={SuccessCard}
                                />
                                <View >
                                    <Text style={styles.addCardDesc}>
                                        8234 **** **** 3292
                                    </Text>
                                    <Text style={styles.cardInText}>
                                        Mastercard
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Icond
                                    style={styles.addCardIcon}
                                    name="credit-card-alt"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btnFooter}>
                <Text
                    onPress={() => navigation.navigate("TransSuccess")}
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
        backgroundColor: 'white',
    },
    textTilteBold: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
    },
    firstBox: {
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    cadrHeaderDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontWeight: 'bold',
    },
    breakLine: {
        height: 0.2,
        backgroundColor: '#A3A3A3',
        marginTop: 15,
        marginBottom: 15,
    },
    firstCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    monatan: {
        fontWeight: 'bold'
    },
    price: {
        color: '#33CC66',
        fontWeight: 'bold',
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
    addCardIcon: {
        fontSize: 20,
        color: '#E5E5E5'
    },
    cardInText: {
        fontSize: 10,
        color: '#828282'
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
})
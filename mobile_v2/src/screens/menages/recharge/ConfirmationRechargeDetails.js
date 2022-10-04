import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/AntDesign';

export default function ConfirmationRechargeDetails({navigation}) {
  return (
    <View style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Confirmation</Text>
                    <View style={{ marginTop: 30 }}>
                        <View>
                            <Text style={{ color:"#7C7C7C" }}>Opérateur</Text>
                            <View style={styles.infoBox}>
                                <Icon
                                    style={{ fontSize: 25, color: '#A3A3A3',marginRight:20 }}
                                    name="access-point"
                                />
                                <Text  style={{ fontSize: 18, color: 'black',fontWeight:'bold'}}>
                                    Maroc Telecom
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View>
                            <Text style={{ color:"#7C7C7C" }}>Numéro de téléphone</Text>
                            <View style={styles.infoBox}>
                                <Icon
                                    style={{ fontSize: 25, color: '#A3A3A3',marginRight:20 }}
                                    name="cellphone"
                                />
                                <Text  style={{ fontSize: 18, color: 'black',fontWeight:'bold'}}>
                                    06 79 73 98 23
                                </Text>
                            </View>
                        </View>
                    </View>

                    

                    <View style={{ marginTop: 10 }}>
                        <View>
                            <Text style={{ color:"#7C7C7C" }}>Montant</Text>
                            <View style={styles.infoBox}>
                                <Icon
                                    style={{ fontSize: 30, color: '#A3A3A3',marginRight:20 }}
                                    name="cash"
                                />
                                <Text  style={{ fontSize: 18, color: 'black',fontWeight:'bold'}}>
                                    10.00 Dhs
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
            <View style={styles.boxBtn}>
                <Text onPress={() => navigation.navigate("RechargeSuccess")} style={styles.btnNext}>
                    Confirmer
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
    infoBox : {
        flexDirection:'row',
        alignItems: 'center',
        marginTop:10,
        borderBottomColor:'lightgray',
        borderBottomWidth:1,
        paddingBottom:10,
    },
})
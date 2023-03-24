import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import successImg from "../../../assets/images/done.png";

export default function SuccessPayment({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBox} >
                    <View>
                        <Image
                            source={successImg}
                            style={styles.iconImg}
                        />
                        <Text style={styles.textBtn}>
                            Félicitations!
                        </Text>
                        <Text style={styles.textDesc}>
                            Vous pouvez suivre votre commande
                            dans la partie ''Mes Ordres''
                        </Text>
                    </View>
                    <View style={styles.btnStylesBox}>
                        <Text style={styles.textBtnOne} onPress={()=>navigation.navigate("CollectorOrders")}>
                            Mes Ordres
                        </Text>
                        <Text style={styles.textBtnTwo}>
                            domicile
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerBox: {
        flex: 1,
        marginHorizontal: 20,
    },

    iconImg: {
        width: 150,
        height: 150,
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 105,

    },
    textBtn: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 15,
        marginTop: 20,
    },
    textDesc: {
        fontSize: 13,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 15,
        color: "#A3A3A3",
    },
    btnStylesBox: {
        marginTop: 80,
    },
    textBtnOne: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 15,
        color: "white",
        borderRadius: 5 ,
        backgroundColor: '#33CC66',
        padding: 15,
    },
    textBtnTwo: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 15,
        color: "black",
        borderRadius: 5 ,
        backgroundColor: '#F6F6F6',
        padding: 15,
    },

});
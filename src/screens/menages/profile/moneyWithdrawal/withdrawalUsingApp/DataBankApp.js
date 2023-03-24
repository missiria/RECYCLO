import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

export default function DataBankApp() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxTitle}>Votre commande est en attente de retrait</Text>
            <View style={styles.cardBox}>
                <Text style={{ marginHorizontal: 15, marginTop: 20, fontWeight: 'bold' }}>Avis de retraits du 15-10-2021 </Text>
                <Text style={{ marginHorizontal: 15, marginTop: 7, fontWeight: 'bold', color: '#33CC66' }}>100.00 Dhs</Text>
                <Text style={styles.boxTextWhat}>Retrait via app bancaire</Text>
                <View style={styles.firstFlexBx}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Numéro de transaction </Text>
                    <Text style={{ color: '#7C7C7C' }}>738J0023OMWYLG2</Text>
                </View>
                <View style={styles.lineBreak}></View>
                <Text style={{ marginHorizontal: 15, marginTop: 14, fontWeight: 'bold' }}>Mon code de retrait : </Text>
                <View style={styles.firstFlexBx}>
                    <Text style={{ color: '#33CC66', fontWeight: 'bold' }}>84983457873476</Text>
                    <Text style={{ color: '#7C7C7C' }}>Copier</Text>
                </View>
                <View style={styles.bottomCrdBox}>
                    <View style={{  flexDirection: 'row',maxWidth:200,  }}>
                        <Icon 
                            style={{ color:'#33CC66',fontSize:20,marginRight:10 }}
                            name="time-slot"
                        />
                        <Text style={{ fontWeight:'bold',fontSize:12 }}>Votre demande de retrait expire
                            dans : 1j 23h 59mn </Text>
                    </View>
                    <Text style={{ color:'#7C7C7C' }}>Annuler</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    boxTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
    },
    cardBox: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
        marginTop: 20,
    },
    boxTextWhat: {
        marginTop: 7, 
        fontWeight: 'bold',
        backgroundColor: '#FCF5F5',
        padding: 20,
    },
    firstFlexBx: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 15,
        alignItems: 'center',
    },
    lineBreak: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 0.5,
        marginTop: 10,
    },
    bottomCrdBox : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop:20,
        marginBottom:20,
    },
})
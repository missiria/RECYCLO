import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import CasImg from '../../../assets/images/cash.png'

export default function PayedAlert() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBoxOne}>
                    <Image
                        style={styles.image}
                        source={CasImg}
                    />
                    <Text style={styles.boldTitle}>
                        Passez au Premium
                        pour continuer cette opération
                    </Text>
                    <Text style={styles.textLight}>
                        Achetez plus de matériel avec un accès illimité
                    </Text>
                    <Text style={styles.cardBoxText}>
                        Seulement 500 MAD/mois
                    </Text>
                    <Text style={styles.button}>
                        Upgrade
                    </Text>
                    <Text style={styles.conditionTextBox}>
                        En passant cette commande, vous acceptez les
                        <Text style={styles.cindation}>
                            conditions d'utilisation 
                        </Text>
                        et la 
                        <Text style={styles.cindation}>
                            politique de confidentialité
                        </Text>
                    </Text>
                </View>
                <View style={styles.boxSuport}>
                    <Text style={styles.textSuportBold}>
                        Contactez nous!
                    </Text>
                    <Text style={styles.textSuportLight}>
                        Envoyez-nous un message si vous rencontrez des difficultés pour
                        passer à la version premium ou payer votre abonnement
                    </Text>
                    <View style={styles.inputSuport}>
                        <TextInput
                            style={styles.input}
                            placeholder="Votre message"
                            placeholderTextColor="#979797"
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                    <Text style={styles.buttonSuport}>
                        Envoyer
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',   
    },
    containerBoxOne: {

        marginHorizontal: 20,
    },
    image: {
        width: 150,
        height: 200,
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 20,


    },
    boldTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    textLight: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 12,
    },

    cardBoxText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#4ECB71',
        color: '#4ECB71',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
        paddingVertical: 14,
        borderRadius: 5,
        marginTop: 22,
        backgroundColor: '#4ECB71',
    },
    conditionTextBox: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 12,
        marginTop: 1,
    },
    cindation: {
        color: '#4ECB71',
        fontWeight: 'bold',
        fontSize: 12,
    },

    // 
    boxSuport   : {
        marginHorizontal: 20,
        marginTop: 50,
    },

    textSuportBold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    textSuportLight: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 11,
    },
    inputSuport: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        color: '#4ECB71',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        height: 120,
    },
    buttonSuport: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
        paddingVertical: 14,
        borderRadius: 5,
        marginTop: 22,
        backgroundColor: '#292D32',
    },

})

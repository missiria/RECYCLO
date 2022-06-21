import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import waitingImg from '../../../assets/images/wait.png'

export default function VerifyAccount() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={waitingImg}
                    />
                    <Text style={styles.textTitleBold}>
                        Vous êtes presque Hassan
                        Aberdaze!
                    </Text>
                    <Text style={styles.textTitleLight}>
                        Nous avons besoin de temps pour
                        approuver votre compte
                    </Text>
                    <Text style={styles.centerText}>
                        Pourquoi dois-je attendre?
                    </Text>
                    <Text style={styles.textDesc}>
                        Nous voulons nous assurer que tout le
                        monde peut travail facilement et en
                        toute sécurité avec Recycloo.
                    </Text>
                    <Text style={styles.bottomText}>
                        En créant ou en vous connectant à un compte, vous acceptez nos 
                         <Text style={styles.conditions}> conditions générales  </Text>
                         et <Text style={styles.Poli}> notre déclaration de confidentialité. </Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    iconImg: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    },
    textTitleBold: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        marginHorizontal: 21
    },
    textTitleLight: {
        fontSize: 14,
        fontWeight: '100',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 24,
        color:'#333333'
    },
    centerText: {
        fontSize: 19,
        fontWeight: '100',
        marginBottom: 10,
        marginTop: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#33CC66'
    },
    textDesc: {
        fontSize: 14,
        fontWeight: '100',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 24,
        color:'#333333'
    },
    bottomText: {
        fontSize: 9,
        fontWeight: '100',
        marginTop: 50,
        textAlign: 'center',
        marginHorizontal: 24,
        color:'#333333'
    },
    conditions: {
        fontSize: 9,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: '100',
        marginTop: 10,
        textAlign: 'center',
        color:'#33CC66'
    },
    Poli: {
        fontSize: 9,
        fontWeight: '100',
        marginTop: 10,
        textAlign: 'center',
        color:'#33CC66'
    }


})
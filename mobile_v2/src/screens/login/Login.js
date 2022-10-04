import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import logoTwo from '../../assets/images/logo_2.png'
import i18n from "i18next";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={logoTwo}
                style={styles.logo}
            />
            <View >
                <View >
                    <Text
                        onPress={() => navigation.navigate("Login")}
                        style={styles.buttonOne}>
                        {i18n.t("login.sign_in")}
                    </Text>
                </View>
                <View >
                    <Text
                        style={styles.buttonTwo}
                        onPress={() => navigation.navigate("Register")} >
                        {i18n.t("login.sign_up")}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 126.64,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
    },
    buttonOne: {
        backgroundColor: '#33CC66',
        color: 'white',
        padding: 15,
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 15,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'MetropoliceLight',
    },
    buttonTwo: {
        backgroundColor: '#F6F6F6',
        color: 'black',
        padding: 15,
        paddingHorizontal: 64,
        borderRadius: 5,
        marginTop: 10,
        fontWeight: '500',
        fontFamily: 'MetropoliceLight',
    }
});
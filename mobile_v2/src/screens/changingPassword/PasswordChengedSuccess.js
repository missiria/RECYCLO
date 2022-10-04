import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import iconSuccess from '../../assets/images/done.png'
import i18n from "i18next";

export default function Done({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                <Image
                    source={iconSuccess}
                    style={styles.Img}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.bigText}>
                        {i18n.t("changePassword.changed_password_success_title")}
                    </Text>
                    <Text style={styles.smallText}>
                        {i18n.t("changePassword.changed_password_success_desc")}
                    </Text>
                </View>
            </ScrollView>
            <Text
                style={styles.buttonLogin}
                onPress={() => navigation.navigate("Login")}>
                 {i18n.t("changePassword.changed_password_success_btn")}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Img: {
        width: 199.56,
        height: 148,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textContainer : {
        marginTop: 70,
        alignSelf: 'center',
    },
    bigText : {
       fontSize: 25,
       textAlign: 'center',
       fontFamily: 'MetropoliceBold',
       letterSpacing: 0.5,
    },
    smallText : {
        fontSize: 14,
        color: '#A3A3A3',
        fontFamily: 'MetropoliceLight',
        textAlign: 'center',
        letterSpacing: 0.5,
        marginTop: 20,
        lineHeight: 25,
    },
    buttonLogin: {
        backgroundColor: '#33CC66',
        padding: 15,
        textAlign: 'left',
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 5,
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
        marginHorizontal: 30,
        marginBottom: 30,
    },
});
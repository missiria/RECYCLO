import React from "react"
import i18n from "i18next"
import { View, Text, StyleSheet, Image } from "react-native"
import logoTwo from "../../assets/images/logo_2.png"

export default function LoginIndex({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={logoTwo}
                style={styles.logoStyle}
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        Width: "10px",
        Height: 50,
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
    },
    logoStyle : {
        width : 100,
        height : 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
        resizeMode: 'contain',
    }
});

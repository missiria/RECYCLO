import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { RadioButton } from "react-native-paper";

function Language({ navigation }) {
    const [checked, setChecked] = useState('fr');
    const [rtl, setRtl] = useState(false);
    const handleValidChoice = (lang) => {
        if (lang.length == 2) {
            navigation.navigate("Salut");
        } else {
            alert("Veuillez choisir une option!");
        }
    }
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setChecked(lang);
    }
    const rtlText = rtl && { writingDirection: 'rtl' };
    const rtlView = rtl && { flexDirection: 'row-reverse' };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>
                    {i18n.t("langues.choice-lang")}
                </Text>
                <Text style={styles.texDesc}>
                    {i18n.t("langues.choice-lang-paragraph")}
                </Text>
                <View style={styles.lineBreak}></View>
                <View style={styles.inputBoxs}>
                    <TouchableOpacity
                        onPress={() => { changeLanguage('ar'); setRtl(true) }}
                        style={[styles.langBox, rtlView]}>
                        <RadioButton
                            uncheckedColor='#A3A3A3'
                            value="ar"
                            status={checked === 'ar' ? 'checked' : 'unchecked'}
                            onPress={() => { changeLanguage('ar'); setRtl(true) }}
                            color="#33CC66"
                        />
                        <Text style={styles.langText}>
                            {i18n.t("langs.ar")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { changeLanguage('fr'); setRtl(false) }}
                        style={[styles.langBox, rtlView]}>
                        <RadioButton
                            uncheckedColor='#A3A3A3'
                            value="fr"
                            status={checked === 'fr' ? 'checked' : 'unchecked'}
                            onPress={() => { changeLanguage('fr'); setRtl(false) }}
                            color="#33CC66"
                        />
                        <Text style={styles.langText}>
                            {i18n.t("langs.fr")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => handleValidChoice(checked)}
                style={styles.button}>
                <Text
                    style={styles.buttonText}>
                    {i18n.t("langues.select")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25,
    },
    textTitle: {
        fontSize: 22,
        color: 'black',
        marginTop: 100,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    texDesc: {
        fontSize: 15,
        marginTop: 10,
        color: "#A3A3A3",
        fontWeight: '400',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    lineBreak: {
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    langText: {
        fontFamily: 'MetropoliceLight',
        fontWeight: '400',
        fontSize: 15,
        letterSpacing: 0.5,
    },
    langBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#33CC66',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'MetropoliceLight',
    },

})

export default Language;
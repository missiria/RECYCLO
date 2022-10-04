import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { defaultValues,schema, handleAuthSubmit } from './services/auth.services'
import { Formik } from "formik";
import i18n from "i18next";

export default function SignIn({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlText = rtl && { textAlign: 'right', paddingRight: 20 };
    const errorsRtlText = rtl && { textAlign: 'right', paddingRight: 0 };
    useEffect(() => {
        if (i18n.language == "ar") {
            setRtl(true);
        } else {
            setRtl(false);
        }
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }} >
                <Formik
                    initialValues={defaultValues}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                      handleAuthSubmit(values, navigation, actions.setErrors)
                  }}
                >
                    {(props) => (
                        <View>
                            <View style={styles.textTitle}>
                                <Text style={styles.connectTitle}>
                                    {i18n.t("login.sign_in_title")}
                                </Text>
                                <Text style={styles.connectDesc}>
                                    {i18n.t("login.sign_in_desc")}
                                </Text>
                            </View>
                            <TextInput
                                style={[styles.inputPhone, rtlText]}
                                placeholder={i18n.t("login.login_email_phone")}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                            {props.errors.email ? (
                                <Text style={[styles.error, errorsRtlText]}>{props.errors.email}</Text>
                            ) : null}
                            <View >
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={i18n.t("login.login_password")}
                                    style={[styles.inputPassword, rtlText]}
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                    value={props.values.password}
                                />
                                {props.errors.password ? (
                                    <Text style={[styles.error, errorsRtlText]}>{props.errors.password}</Text>
                                ) : null}
                            </View>
                            <Text
                                onPress={() => navigation.navigate("ChangePasswordIndex")}
                                style={styles.forgetCode}>
                                {i18n.t("login.forget_password")}
                            </Text>
                            <Text
                                style={styles.buttonLogin}
                                onPress={props.handleSubmit}>
                                {i18n.t("login.connetion")}
                            </Text>
                            <Text style={styles.textInscrirr}>
                                {i18n.t("login.need_account")} <Text
                                    onPress={() => navigation.navigate("Register")}
                                    style={styles.inscrireTextLink} >
                                    {i18n.t("login.sign_up")}
                                </Text>
                            </Text>
                        </View>
                    )}
                </Formik>
            </ScrollView>
            {/* <LoginTextCondition /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 30,
    },
    textTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    connectTitle: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'MetropoliceBold',
        letterSpacing: 0.5,
    },
    connectDesc: {
        color: '#A3A3A3',
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    inputPhone: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 80,
        borderRadius: 5,
        height: 55,
        width: '100%',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    inputPassword: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 80,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        height: 55,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    forgetCode: {
        color: '#33CC66',
        textAlign: 'right',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'MetropoliceLight',
        marginTop: 13,
        fontStyle: 'normal',
        letterSpacing: 0.5,
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
    },
    textInscrirr: {
        textAlign: 'center',
        fontSize: 12,
        color: '#A3A3A3',
        marginTop: 18,
        fontFamily: 'MetropoliceLight',
        fontWeight: '400',
        letterSpacing: 0.5,
    },
    inscrireTextLink: {
        color: '#33CC66',
        fontWeight: "500",
    },
    error: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'MetropoliceLight',
        marginTop: 5,
        fontStyle: 'normal',
        letterSpacing: 0.5,
    }
});
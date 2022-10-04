import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { defaultValue, handleSubmit, schema } from './services/register.services';
import i18n from "i18next";
import { RadioButton } from "react-native-paper"


export default function Register({ navigation }) {
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
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.textTitle}>
          <Text style={styles.connectTitle}>
            {i18n.t("login.sign_up")}
          </Text>
          <Text style={styles.connectDesc}>
            {i18n.t("login.sign_up_desc")}
          </Text>
        </View>
        <Formik
          initialValues={defaultValue}
          validationSchema={schema}
          onSubmit={(values) => handleSubmit(values, navigation)}
        >
          {(props) => (
            <View style={styles.formBox}>
              <TextInput
                style={[styles.inputPhone, rtlText]}
                placeholder={i18n.t("login.last_name")}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
              />
              {props.touched.name ? (
                <Text style={[styles.error, errorsRtlText]}>{props.errors.name}</Text>
              ) : null}
              <TextInput
                style={[styles.inputPhone, rtlText]}
                placeholder={i18n.t("login.first_name")}
                onChangeText={props.handleChange('lastName')}
                onBlur={props.handleBlur('lastName')}
                value={props.values.lastName}
              />
              {props.touched.lastName ? (
                <Text style={[styles.error, errorsRtlText]}>{props.errors.lastName}</Text>
              ) : null}
              <TextInput
                style={[styles.inputPhone, rtlText]}
                keyboardType="numeric"
                placeholder={i18n.t("login.phone")}
                onChangeText={props.handleChange('phone')}
                onBlur={props.handleBlur('phone')}
                value={props.values.phone}
              />
              {props.errors.phone ? (
                <Text style={[styles.error, errorsRtlText]}>{props.errors.phone}</Text>
              ) : null}
              <TextInput
                style={[styles.inputPhone, rtlText]}
                keyboardType="email-address"
                placeholder={i18n.t("login.email")}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
              />
              {props.errors.email ? (
                <Text style={[styles.error, errorsRtlText]}>{props.errors.email}</Text>
              ) : null}
              <TextInput
                secureTextEntry={true}
                placeholder={i18n.t("login.password")}
                style={[styles.inputPassword, rtlText]}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
              />
              {props.errors.password ? (
                <Text style={[styles.error, errorsRtlText]}>{props.errors.password}</Text>
              ) : null}
              <RadioButton.Group
                onValueChange={props.handleChange("type")}
                value={props.values.type}

              >
                <View style={styles.radioGroup}>
                  <View style={styles.radioInputBox}>
                    <RadioButton color='#33CC66'  value="MENAGE" />
                    <Text style={styles.textRadio}>Ménage</Text>
                  </View>
                  <View style={styles.radioInputBox}>
                    <RadioButton color='#33CC66' value="COLLECTOR" />
                    <Text style={styles.textRadio}>Collector</Text>
                  </View>
                </View>
              </RadioButton.Group>

              <Text
                style={styles.buttonLogin}
                onPress={() => props.handleSubmit()} >
                {i18n.t("login.sign_up")}
              </Text>
            </View>
          )}
        </Formik>
        <Text style={styles.textInscrirr}>
          {i18n.t("login.already_registered")} <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.inscrireTextLink}>
            {i18n.t("login.connetion_lc")}
          </Text>
        </Text>
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
  formBox: {
    marginTop: 30,
    width: '100%',
  },
  textTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectTitle: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'MetropoliceBold',
    letterSpacing: 0.5,
  },
  connectDesc: {
    color: '#A3A3A3',
    fontFamily: 'MetropoliceLight',
    marginTop: 10,
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
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    marginTop: 20,
  },
  inputPassword: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 80,
    borderRadius: 5,
    width: '100%',
    height: 55,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    marginTop: 20,
  },
  forgetCode: {
    color: '#12A5F0',
    textAlign: 'right'
  },
  buttonLogin: {
    backgroundColor: '#33CC66',
    padding: 15,
    textAlign: 'left',
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 5,
    marginTop: 50,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'MetropoliceLight',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textInscrirr: {
    textAlign: 'center',
    fontSize: 12,
    color: '#A3A3A3',
    marginTop: 18,
    fontFamily: 'MetropoliceLight',
    fontWeight: '400',
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  inscrireTextLink: {
    color: '#33CC66',
    fontWeight: "500",
    paddingRight: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'MetropoliceLight',
    fontWeight: '400',
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 20
  },
  textRadio: {
    color: '#A3A3A3',
  },
  radioInputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 20
  },
});
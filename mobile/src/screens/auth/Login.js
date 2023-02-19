import React from "react";
import i18n from "i18next";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import Toast from 'react-native-toast-message';
// Services
import { handleLogin, schema, defaultValues } from "./services/login.services";
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput";

export default function Login({ navigation }) {
  const [authLoaded, setAuthLoaded] = useState(false);
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
       <Toast
        ref={(ref) => Toast.setRef(ref)}
       />
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }} >
        <View style={styles.textTitle}>
          <Text style={styles.connectTitle}>
            {i18n.t("login.sign_in_title")}
          </Text>
          <Text style={styles.connectDesc}>
            {i18n.t("login.sign_in_desc")}
          </Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={(values, { setErrors }) => {
              handleLogin(values, navigation, setErrors, setAuthLoaded);
            }}>
            {(props) => (
              <ScrollView>
                {console.log(props.errors)}
                <EdgeTextInput
                  name="phone"
                  props={props}
                  style={[styles.inputPassword, rtlText, props.errors.phone && styles.inputErrorPhone]}
                  keyboardType="phone-pad"
                  placeholder={i18n.t("login.phone")}
                />
                <EdgeTextInput
                  name="password"
                  props={props}
                   style={[styles.inputPassword, rtlText, props.errors.password && styles.inputErrorPhone]}
                  placeholder={i18n.t("login.password")}
                />
                {props.errors.api && (
                  Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: props.errors.api,
                    visibilityTime: 5000,
                    bottomOffset: 40,
                  })
                )}
                <Text
                  onPress={() => navigation.navigate("ChangePasswordIndex")}
                  style={styles.forgetCode}>
                  {i18n.t("login.forget_password")}
                </Text>
                <Text
                  style={styles.buttonLogin}
                  onPress={props.handleSubmit}
                  disabled={authLoaded}>
                  {authLoaded ? (
                    <ActivityIndicator
                      size="small"
                      color="#ffffff"
                    />
                  ) : (
                    i18n.t("login.sign_in")
                  )}
                </Text>
                <Text style={styles.textInscrirr}>
                  {i18n.t("login.need_account")} <Text
                    onPress={() => navigation.navigate("Register")}
                    style={styles.inscrireTextLink} >
                    {i18n.t("login.sign_up")}
                  </Text>
                </Text>
              </ScrollView>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
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
  },
  inputErrorPhone : {
    borderColor:'red', 
    borderWidth : 1,
  },
  inputErrorPassword : {
    borderColor:'red',
    borderWidth : 1,
  },
});

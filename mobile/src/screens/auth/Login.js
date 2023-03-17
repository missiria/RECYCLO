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
import { useState } from "react";
import { isRtl } from "../../helper/isRtl";
import { stylesRtl } from "../../helper/styleRtl";

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
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.textTitle}>
            <Text style={styles.connectTitle}>Se connecter</Text>
            <Text style={styles.connectDesc}>Avez-vous un compte? Connecter</Text>
          </View>
        <Formik
          initialValues={defaultValues}
          validationSchema={schema}
          onSubmit={(values, { setErrors }) =>
            handleLogin(values, navigation, setErrors, setAuthLoaded)
          }
        >
          {(props) => (
            <View>
              <EdgeTextInput
                name="phone"
                props={props}
                style={[styles.inputPhone, isRtl(i18n) === true && stylesRtl.rtlStyleInput]}
                keyboardType="phone-pad"
                placeholder={i18n.t("login.phone")}
              />
              <EdgeTextInput
                name="password"
                props={props}
                style={[styles.inputPhone,  isRtl(i18n) === true && stylesRtl.rtlStyleInput]}
                placeholder={i18n.t("login.password")}
              />
              <Text
                onPress={() => navigation.navigate("ChangePasswordIndex")}
                style={[styles.forgetCode, isRtl(i18n) === true && stylesRtl.rtlStyleText]}
              >
                {i18n.t("login.forget_password")}
              </Text>
              {props.errors.api && (
                <Text style={{ color: "red" }}>{props.errors.api}</Text>
              )}
              <Text
                style={styles.buttonLogin}
                onPress={props.handleSubmit}
                disabled={authLoaded}
              >
                {authLoaded ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  i18n.t("login.sign_in")
                )}
              </Text>
              <Text style={styles.textSignUp}>
                {i18n.t("login.need_account")}
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={styles.textSignUpLink}>
                  {i18n.t("login.sign_up")}
                </Text>
              </Text>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={styles.textBottom}>
        <Text style={styles.textBottomDesc}>{i18n.t("login.bottom_text")}</Text>
      </View>
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
        letterSpacing: 0.5,
    },
    connectDesc: {
        color: '#A3A3A3',
        fontSize: 14,
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
        letterSpacing: 0.5,
    },
    forgetCode: {
        color: '#33CC66',
        textAlign: 'right',
        fontSize: 12,
        fontWeight: '400',
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
        letterSpacing: 0.5,
    },
    textSignUp: {
        textAlign: 'center',
        fontSize: 12,
        color: '#A3A3A3',
        marginTop: 18,
        fontWeight: '400',
        letterSpacing: 0.5,
    },
    textSignUpLink: {
        color: '#33CC66',
        fontWeight: "500",
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        fontStyle: 'normal',
        letterSpacing: 0.5,
    },
    textBottom: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      letterSpacing: 0.5,
  },
  textBottomDesc: {
      textAlign: 'center',
      fontSize: 9,
      color: '#A3A3A3',
      marginHorizontal: 10,
      fontWeight: '400',
      lineHeight: 12,
      letterSpacing: 0.5,
  },
});

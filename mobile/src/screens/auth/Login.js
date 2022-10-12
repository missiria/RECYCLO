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

// Services
import { handleLogin, schema, defaultValues } from "./services/login.services";
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput";

export default function Login({ navigation }) {
  const [authLoaded, setAuthLoaded] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text style={styles.connectTitle}>Se connecter</Text>
        <Text style={styles.connectDesc}>Avez-vous un compte? Connecter</Text>
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={defaultValues}
          validationSchema={schema}
          onSubmit={(values, { setErrors }) => {
            handleLogin(values, navigation, setErrors, setAuthLoaded);
          }}
        >
          {(props) => (
            <ScrollView>
              <EdgeTextInput
                name="phone"
                props={props}
                style={styles.inputPhone}
                keyboardType="phone-pad"
                placeholder={i18n.t("login.phone")}
              />
              <EdgeTextInput
                name="password"
                props={props}
                style={styles.inputPhone}
                placeholder={i18n.t("login.password")}
              />
              <Text
                onPress={() => navigation.navigate("ChangePasswordIndex")}
                style={styles.forgetCode}
              >
                {i18n.t("login.forget_password")}
              </Text>
              {props.errors.api && (
                <Text style={{ color: "red" }}>{props.errors.api}</Text>
              )}
              <Text style={{ color: "red" }}>{props.errors.api}</Text>
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
              <Text style={styles.textRegister}>
                {i18n.t("login.need_account")}
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={styles.signUpTextLink}
                >
                  {i18n.t("login.sign_up")}
                </Text>
              </Text>
            </ScrollView>
          )}
        </Formik>
      </View>
      <View style={styles.textBottom}>
        <Text style={styles.textBottomDesc}>{i18n.t("login.bottom_text")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  connectTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
  },
  connectDesc: {
    color: "#767676",
  },
  form: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPhone: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 80,
    borderRadius: 5,
  },
  inputPassword: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 80,
    borderRadius: 5,
    marginTop: 20,
  },
  forgetCode: {
    color: "#33CC66",
    textAlign: "right",
  },
  buttonLogin: {
    backgroundColor: "#33CC66",
    padding: 15,
    textAlign: "left",
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 5,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textRegister: {
    textAlign: "center",
    fontSize: 12,
    color: "#A3A3A3",
    marginTop: 10,
  },
  signUpTextLink: {
    color: "#33CC66",
    fontWeight: "500",
  },
  textBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBottomDesc: {
    textAlign: "center",
    fontSize: 10,
    color: "#A3A3A3",
    marginTop: 10,
    marginHorizontal: 20,
  },
});

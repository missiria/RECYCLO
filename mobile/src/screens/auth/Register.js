import React, { useState } from "react"
import i18n from "i18next"
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native"
import { Formik } from "formik"
import {
  defaultValues,
  schema,
  handleRegister
} from "./services/register.services"
import { RadioButton } from "react-native-paper"
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput"

export default function Register({ navigation }) {
  const [authLoaded, setAuthLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textTitle}>
          <Text style={styles.connectTitle}>{i18n.t("login.sign_up")}</Text>
          <Text style={styles.connectDesc}>{i18n.t("login.need_account")}</Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={(values, { setErrors }) =>
              handleRegister(values, navigation, setErrors, setAuthLoaded)
            }
          >
            {(props) => (
              <View>
                <EdgeTextInput
                  name="phone"
                  props={props}
                  style={styles.inputPhone}
                  keyboardType="phone-pad"
                  placeholder={i18n.t("login.phone")}
                />
                {/* TODO : Check CSS selector rules (.inputPhone) together  */}
                <EdgeTextInput
                  name="email"
                  props={props}
                  style={styles.inputPhone}
                  keyboardType="email-address"
                  placeholder={i18n.t("login.email")}
                />
                <EdgeTextInput
                  name="last_name"
                  props={props}
                  style={styles.inputPhone}
                  placeholder={i18n.t("login.last_name")}
                />
                <EdgeTextInput
                  name="first_name"
                  props={props}
                  style={styles.inputPhone}
                  placeholder={i18n.t("login.first_name")}
                />
                <EdgeTextInput
                  name="password"
                  props={props}
                  style={styles.inputPhone}
                  placeholder={i18n.t("login.password")}
                />
                <RadioButton.Group
                  onValueChange={props.handleChange("type")}
                  value={props.values.type}
                  
                >
                  <View style={styles.radioGroup}>
                    <View style={styles.radioInputBox}>
                      <RadioButton value="MENAGE" />
                      <Text style={styles.textRadio}>Ménage</Text>
                    </View>
                    <View style={styles.radioInputBox}>
                      <RadioButton value="COLLECTOR" />
                      <Text style={styles.textRadio}>Collector</Text>
                    </View>
                  </View>
                </RadioButton.Group>
                
                <Text  style={styles.buttonLogin} onPress={props.handleSubmit}>
                    {authLoaded ? (
                      <Text><ActivityIndicator size="small" color="#fff" /></Text>
                    ) : (
                      i18n.t("login.sign_up")
                    )}
                </Text>
                <Text style={styles.textAlreadyRegistered}>
                  {i18n.t("login.already_registered")}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.registerTextLink}
                  >
                    {' '} {i18n.t("login.sign_in")}
                  </Text>
                </Text>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.textBottomDesc}>
            {i18n.t("login.sign_up_text_bottom")}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  textRadio : {
    color:'#A3A3A3',
  },
  textTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  radioInputBox : {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight:20
  },
  connectTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  connectDesc: {
    color: "#767676",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputPhone: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginBottom: 1,
    width: 300,
    maxWidth: "100%",
  },
  inputPassword: {
    backgroundColor: "#E6E6E6",
    padding: 10,
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 80,
    borderRadius: 5,
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
    // zIndex: 999,
  },
  textAlreadyRegistered: {
    textAlign: "center",
    fontSize: 12,
    color: "#A3A3A3",
    marginTop: 10,
  },
  registerTextLink: {
    color: "#33CC66",
    fontWeight: "500",
  },
  textBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
  },
  textBottomDesc: {
    textAlign: "center",
    fontSize: 10,
    color: "#A3A3A3",
    marginTop: 10,
    marginHorizontal: 20,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: 'center',
  },
});

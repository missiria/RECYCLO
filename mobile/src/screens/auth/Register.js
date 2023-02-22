import React, { useState, useEffect } from "react";
import i18n from "i18next";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import {
  defaultValues,
  schema,
  handleRegister,
} from "./services/register.services";
import { RadioButton } from "react-native-paper";
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput";

export default function Register({ navigation }) {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [rtl, setRtl] = useState(false);
  const rtlText = rtl && { textAlign: 'right', paddingRight: 20 };
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
                 style={[styles.inputPhone, rtlText]}
                  keyboardType="phone-pad"
                  placeholder={i18n.t("login.phone")}
                />
                {/* TODO : Check CSS selector rules (.inputPhone) together  */}
                <EdgeTextInput
                  name="email"
                  props={props}
                 style={[styles.inputPhone, rtlText]}
                  keyboardType="email-address"
                  placeholder={i18n.t("login.email")}
                />
                <EdgeTextInput
                  name="last_name"
                  props={props}
                 style={[styles.inputPhone, rtlText]}
                  placeholder={i18n.t("login.last_name")}
                />
                <EdgeTextInput
                  name="first_name"
                  props={props}
                 style={[styles.inputPhone, rtlText]}
                  placeholder={i18n.t("login.first_name")}
                />
                <EdgeTextInput
                  name="password"
                  props={props}
                 style={[styles.inputPhone, rtlText]}
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

                <Text style={[styles.buttonLogin]} onPress={props.handleSubmit}>
                  {authLoaded ? (
                    <Text>
                      <ActivityIndicator size="small" color="#fff" />
                    </Text>
                  ) : (
                    i18n.t("login.sign_up")
                  )}
                </Text>
                {props.errors.api && (
                  <Text style={{ color: "red" }}>{props.errors.api}</Text>
                )}
                <Text style={styles.textInscrirr}>
                  {i18n.t("login.already_registered")}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.inscrireTextLink}
                  >
                    {" "}
                    {i18n.t("login.sign_in")}
                  </Text>
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      <View style={styles.textBottom}>
          <Text style={styles.textBottomDesc}>
            {i18n.t("login.sign_up_text_bottom")}
          </Text>
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
   letterSpacing: 0.5,
  },
  connectDesc: {
    color: '#A3A3A3',
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
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textInscrirr: {
    textAlign: 'center',
    fontSize: 12,
    color: '#A3A3A3',
    marginTop: 18,
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

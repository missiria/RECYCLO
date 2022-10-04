import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native"
import React, {useState, useEffect} from "react"
import ChangePasswordHeader from "../../assets/images/5.png"
import lockIcon from "../../assets/images/lock.png"
import { Formik } from "formik";
import { handleSubmit, defaultValue, schema } from "./services/changePassword.services";
import i18n from "i18next";

export default function ChangePassword({ navigation }) {
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlText = rtl && { textAlign: 'right', paddingLeft: 0, paddingRight: 20, };
  const errorsRtlText = rtl && { textAlign: 'right', paddingRight: 0 };
  useEffect(() => {
      if (i18n.language == "ar") {
          setRtl(true);
      } else {
          setRtl(false);
      }
  }, []);
  return (
      <Formik
          initialValues={defaultValue}
          validationSchema={schema}
          onSubmit={(values) => handleSubmit(values, navigation)}
      >
          {(props) => (
              <View style={styles.container}>
                  <ScrollView >
                      <View style={styles.contentSection}>
                          <Image
                              source={ChangePasswordHeader}
                              style={styles.img}
                          />
                          <View style={styles.contentText}>
                              <Text style={styles.titleText}>
                                 {i18n.t("changePassword.change_password_title")}
                              </Text>
                              <Text style={styles.descText}>
                                  {i18n.t("changePassword.change_password_desc")}
                              </Text>
                          </View>
                          <View style={styles.sectionInput}>
                              <View style={[styles.inputMain, rtlBox]}>
                                  <Image
                                      source={lockIcon}
                                      style={styles.inputImg}
                                  />
                                  <TextInput
                                      style={[styles.input, rtlText]}
                                      placeholder={i18n.t("changePassword.new_password_input")}
                                      secureTextEntry={true}
                                      onChangeText={props.handleChange("password")}
                                      onBlur={props.handleBlur("password")}
                                      value={props.values.password}
                                  />
                              </View>
                              {props.errors.password ?
                                  <Text style={[styles.errorText, errorsRtlText]}>
                                      {props.errors.password}
                                  </Text>
                                  : null}
                              <View style={[styles.inputMain, rtlBox]}>
                                  <Image
                                      source={lockIcon}
                                      style={styles.inputImg}
                                  />
                                  <TextInput
                                      style={[styles.input, rtlText]}
                                      placeholder={i18n.t("changePassword.confirm_password")}
                                      secureTextEntry={true}
                                      onChangeText={props.handleChange("confirmPassword")}
                                      onBlur={props.handleBlur("confirmPassword")}
                                      value={props.values.confirmPassword}
                                  />
                              </View>
                              {props.errors.confirmPassword ? 
                                  <Text style={[styles.errorText, errorsRtlText]}>
                                      {props.errors.confirmPassword}
                                  </Text>
                               : null}
                          </View>
                      </View>
                  </ScrollView>
                  <Text
                      style={styles.buttonLogin}
                      onPress={props.handleSubmit} >
                      {i18n.t("changePassword.change_password_btn")}
                  </Text>
              </View >
          )}
      </Formik>
  );
}
// styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  contentSection: {
      marginHorizontal: 30,
  },
  img: {
      width: 103,
      height: 126,
      alignSelf: 'center',
      marginTop: 100,
  },
  contentText: {
      marginTop: 40,
  },
  titleText: {
      fontSize: 17,
      fontFamily: 'MetropoliceBold',
      textAlign: 'center',

      letterSpacing: 0.5,
  },
  descText: {
      fontSize: 14,
      fontFamily: 'MetropoliceLight',
      textAlign: 'center',
      color: '#A3A3A3',
      lineHeight: 25,
      marginTop: 20,
      letterSpacing: 0.5,
  },
  inputMain: {
      backgroundColor: '#F6F6F6',
      paddingLeft: 20,
      borderRadius: 5,
      height: 55,
      fontFamily: 'MetropoliceLight',
      letterSpacing: 0.5,
      marginTop: 20,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
  },
  input: {
      fontFamily: 'MetropoliceLight',
      letterSpacing: 0.5,
      fontSize: 14,
      width: "80%",
  },
  sectionInput: {
      marginTop: 40,
  },
  inputImg: {
      width: 18,
      height: 18,
      marginRight: 20,
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
  emailText: {
      fontSize: 14,
      fontFamily: 'MetropoliceLight',
      letterSpacing: 0.5,
      color: '#33CC66',
      textAlign: 'center',
      marginTop: 10,
  },
  otpMain: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 60,
      alignItems: 'center',
      marginBottom: 30,
      alignSelf: 'center',
      marginRight: 20,
  },
  sendCodeText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 14,
      letterSpacing: 0.5,
      color: '#A3A3A3',
      fontFamily: 'MetropoliceLight',
  },
  semdTextBtn: {
      color: '#33CC66',
  },
  errorText: {
      color: '#FF0000',
      fontSize: 14,
      fontFamily: 'MetropoliceLight',
      letterSpacing: 0.5,
  },
})
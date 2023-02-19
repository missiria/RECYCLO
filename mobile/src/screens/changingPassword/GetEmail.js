import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import i18n from "i18next";
import { Formik } from "formik";
import smsTextIcon from "../../assets/images/sms_text.png";
// Services
import { VerifyPhone, schema, defaultValues } from "./services/phone.services";
import Toast from 'react-native-toast-message';

export default function GetEmail({ navigation }) {
  const [loading, setLoading] = useState(false);
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
      <View style={styles.groupImageContainer}>
        <Image source={smsTextIcon}  style={styles.img}/>
      </View>
      <View style={styles.contentText}>
          <Text style={styles.titleText}>
            {i18n.t("changePassword.title")}
          </Text>
          <Text style={styles.descText}>
            {i18n.t("changePassword.desc")}
          </Text>
        </View>
      <Formik
        initialValues={defaultValues}
        validationSchema={schema}
        onSubmit={(values) => VerifyPhone(values, navigation, setLoading)}
      >
        {(props) => (
          <ScrollView>
            {/* TODO : remove inline styles */}
              <View  style={styles.contentSection}>
                <TextInput
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                  keyboardType="email-address"
                  placeholder="Votre Email"
                  style={[styles.input, rtlText, props.errors.email && styles.inputError]}
                />
              </View>
            {props.errors.email &&
                Toast.show({
                  type: 'error',
                  position: 'top',
                  text1: 'Error',
                  text2: props.errors.email,
                  visibilityTime: 5000,
                  bottomOffset: 40,
                }
            )}
              <Text 
                style={styles.buttonLogin}
                onPress={props.handleSubmit}>
                {loading ? (
                  <ActivityIndicator color={"#fff"} />
                ) : (
                  "Envoyer le code"
                )}
              </Text>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentSection: {
    marginHorizontal: 30,
  },
  img: {
    width: 102,
    height: 124,
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
  input: {
    backgroundColor: '#F6F6F6',
    paddingLeft: 20,
    borderRadius: 5,
    height: 55,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    marginTop: 80,
 
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
  errorText : {
    color: 'red',
    fontSize: 14,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    marginTop: 10,
  },
  inputError : {
    borderColor:'red',
    borderWidth : 1,
  },
})
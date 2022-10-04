import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react';
import smsTextIcon from '../../assets/images/sms_text.png'
import { Formik } from 'formik';
import { schema, defaultValue, handleSubmit } from './services/GetEmail.services';
import i18n from "i18next";
export default function GetEmail({ navigation }) {
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
    <Formik 
      initialValues={defaultValue}
      validationSchema={schema}
      onSubmit={(values, actions) => { handleSubmit(values, navigation) }}
    >
      {(props) => (
        <View style={styles.container}>
          <ScrollView >
            <View style={styles.contentSection}>
              <Image
                source={smsTextIcon}
                style={styles.img}
              />
              <View style={styles.contentText}>
                <Text style={styles.titleText}>
                  {i18n.t("changePassword.title")}
                </Text>
                <Text style={styles.descText}>
                  {i18n.t("changePassword.desc")}
                </Text>
              </View>
              <TextInput
                style={[styles.input, rtlText]}
                placeholder={i18n.t("changePassword.email")}
                keyboardType="email-address"
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
              />
              {props.touched.email && props.errors.email ? (
                <Text style={[styles.errorText, errorsRtlText]}>{props.errors.email}</Text>
              ) : null}
            </View>
          </ScrollView>
          <Text
            style={styles.buttonLogin}
            onPress={props.handleSubmit}>
            {i18n.t("changePassword.send_btn")}
          </Text>
        </View >
      )}
    </Formik>
  )
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
})
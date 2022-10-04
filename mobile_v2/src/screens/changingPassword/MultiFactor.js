import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Formik } from 'formik';
import smsIcon from '../../assets/images/sms.png';
import { schema, defaultValue, handleSubmit } from './services/MultiFactor.services';
import i18n from "i18next";

export default function MultiFactor({ navigation }) {
  const optOne = useRef();
  const optTwo = useRef();
  const optThree = useRef();
  const optFour = useRef();
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
      onSubmit={(values, actions) => {
        handleSubmit(values, navigation);
      }}
    >
      {(props) => (
        <View style={styles.container}>
          <ScrollView >
            <View style={styles.contentSection}>
              <Image
                source={smsIcon}
                style={styles.img}
              />
              <View style={styles.contentText}>
                <Text style={styles.titleText}>
                  {i18n.t("changePassword.verifie_title")}
                </Text>
                <Text style={styles.descText}>
                  {i18n.t("changePassword.verifie_desc")}
                </Text>
                <Text style={styles.emailText}>
                  aberdaze.hassan@gmail.com
                </Text>
              </View>
              <View style={styles.otpMain}>
                <TextInput
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={optOne}
                  onChange={(text) => { text && optTwo.current.focus() }}
                  onChangeText={props.handleChange('optOne')}
                  onBlur={props.handleBlur('optOne')}
                  value={props.values.optOne}
                />
                <TextInput
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={optTwo}
                  onChange={(text) => { text ? optThree.current.focus() : optOne.current.focus() }}
                  onChangeText={props.handleChange('optTwo')}
                  onBlur={props.handleBlur('optTwo')}
                  value={props.values.optTwo}
                />
                <TextInput
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={optThree}
                  onChange={(text) => { text ? optFour.current.focus() : optTwo.current.focus() }}
                  onChangeText={props.handleChange('optThree')}
                  onBlur={props.handleBlur('optThree')}
                  value={props.values.optThree}
                />
                <TextInput
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={optFour}
                  onChange={(text) => { !text && optThree.current.focus(); }}
                  onChangeText={props.handleChange('optFour')}
                  onBlur={props.handleBlur('optFour')}
                  value={props.values.optFour}
                />
              </View>
              <Text style={styles.sendCodeText}>
                {i18n.t("changePassword.try_send_code")} <Text style={styles.semdTextBtn}>{i18n.t("changePassword.send_code_btn")}</Text>
              </Text>
            </View>
          </ScrollView>
          <Text
            style={[styles.buttonLogin, !props.isValid && styles.disabledButton]}
            onPress={props.handleSubmit} >
            {i18n.t("changePassword.verifie_btn")}
          </Text>
        </View >
      )}
    </Formik>
  );
}
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
    height: 122,
    alignSelf: 'center',
    marginTop: 100,
  },
  contentText: {
    marginTop: 40,
  },
  disabledButton: {
    backgroundColor: "#C4C4C4",
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
    marginBottom: 20,
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
  otpInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 46.7,
    height: 50,
    fontFamily: 'MetropoliceSemiBold',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 19,
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
    marginHorizontal: 50,
  }
})
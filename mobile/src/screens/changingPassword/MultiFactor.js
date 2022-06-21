
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { handleAuth, schemaValidation, defaultValues } from "./services/verifyPhone.services";
import smsIcon from '../../assets/images/sms.png';

export default function MultiFactor({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imgContainer}>
            <Image
              source={smsIcon}
              style={styles.Img}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bigText}>Vérification</Text>
            <Text style={styles.smallText}>
              Veuillez entrer le code de vérification envoyé à
            </Text>
            <Text style={styles.phoneText}>aberdaze.hassan@gmail.com</Text>
          </View>
          <Formik
            initialValues={defaultValues}
            validationSchema={schemaValidation}
            onSubmit={(values) => handleAuth(values, navigation)}
          >
            {(props) => (
              <View>
                <View style={styles.inputsContainer}>
                  <View style={styles.inputsStyle}>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="*"
                      onChangeText={props.handleChange("n1")}
                      value={props.values.n1}
                      onBlur={props.handleBlur("n1")}
                      maxLength={1}
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="*"
                      onChangeText={props.handleChange("n2")}
                      value={props.values.n2}
                      onBlur={props.handleBlur("n2")}
                      maxLength={1}
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="*"
                      onChangeText={props.handleChange("n3")}
                      value={props.values.n3}
                      onBlur={props.handleBlur("n3")}
                      maxLength={1}
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="*"
                      onChangeText={props.handleChange("n4")}
                      value={props.values.n4}
                      onBlur={props.handleBlur("n4")}
                      maxLength={1}
                    />
                  </View>
                  <Text style={styles.TextInput}>
                    Je n'ai pas reçu de code. <Text style={styles.revoy}>Renvoyer le code</Text>
                  </Text>
                  <Text style={styles.errorStyle}>
                    {props.errors.n1}
                  </Text>
                  <Text style={styles.errorStyle}>
                    {props.errors.n2}
                  </Text>
                  <Text style={styles.errorStyle}>
                    {props.errors.n3}
                  </Text>
                  <Text style={styles.errorStyle}>
                    {props.errors.n4}
                  </Text>
 

                </View>
                <View style={styles.buttonContainer}>
                  <Text onPress={props.handleSubmit} style={styles.button}>
                    Vérifier
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Img: {
    width: 120,
    resizeMode: "contain",
  },
  errorStyle: {
    color: "red",
    marginTop: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bigText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 10,
  },
  smallText: {
    color: "#7C7C7C",
    marginBottom: 10,
  },
  phoneText: {
    color: "#33CC66",
    fontWeight: "bold",
    fontSize: 19,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    padding: 5,
    borderWidth: 2,
    marginLeft: 10,
    textAlign: "center",
    borderColor: "#E5E5E5",
    fontWeight: "bold",
    color: "black",
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  TextInput: {
    color: "#7C7C7C",
    marginTop: 20,
    fontSize: 12,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#33CC66",
    borderRadius: 100,
    padding: 15,
    width: 300,
    color: "white",
    textAlign: "center",
    borderRadius: 7,
    fontWeight: "bold",
  },
  revoy : {
    color :'#33CC66',
    fontWeight: "bold",
    fontSize: 14,
  },
});

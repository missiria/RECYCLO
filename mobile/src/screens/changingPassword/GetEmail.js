import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import smsTextIcon  from '../../assets/images/sms_text.png'
import iconMaroc from '../../assets/images/mr.png';
// Services
import {
  handleAuth,
  schemaValidation,
  defaultValues,
} from "./services/phone.services";

export default function GetEmail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.groupImageContainer}>
        <Image
          source={smsTextIcon}
        />
      </View>
      <Text style={styles.textTitle}>Récupération de mot de passe</Text>
      <Text style={styles.textDesc}>
        Entrez votre Email pour récupérer votre mot de passe
      </Text>
      <Formik
        initialValues={defaultValues}
        validationSchema={schemaValidation}
        onSubmit={(values) => handleAuth(values, navigation)}
      >
        {(props) => (
          <ScrollView>
            {/* TODO : remove inline styles */}
            <View
              style={[
                styles.inputNumber,
                props.errors.email
                  ? { borderColor: "red", borderWidth: 1 }
                  : null,
              ]}
            >
              <View>
                <TextInput
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                  keyboardType="email-address"
                  placeholder="Votre Email"
                  style={styles.input}
                />
              </View>
            </View>
            <Text style={{ color: "red", marginHorizontal: 20, marginTop: 2 }}>
              {props.errors.email}
            </Text>
            <View style={styles.buttonContainer}>
              <Text onPress={props.handleSubmit} style={styles.button}>
                Envoyer le code
              </Text>
            </View>
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
    backgroundColor: "white",
  },
  groupImageContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  groupTextFormContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  textDesc: {
    fontWeight: "100",
    color: "#7C7C7C",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 100,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#33CC66",
    borderRadius: 100,
    padding: 15,
    width: "90%",
    color: "white",
    textAlign: "center",
    borderRadius: 7,
    fontWeight: "bold",
  },
  dropDow: {
    fontWeight: "bold",
    color: "black",
    height: 50,
    width: 100,
  },
  inputNumber: {
    marginTop: 40,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  imdNadDrop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontWeight: "bold",
    color: "black",
    height: 50,
    marginLeft: 20,
    borderRadius: 5,
  },
});

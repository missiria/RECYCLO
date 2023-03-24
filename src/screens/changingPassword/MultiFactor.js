
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { handleAuth, schemaValidation, defaultValues } from "./services/verifyPhone.services";
import smsIcon from '../../assets/images/sms.png';
import { EdgeButton } from "~/ui/buttons/EdgeButton"
import { useFetch } from '../../hooks/hooks';

export default function MultiFactor({ navigation, route }) {
  var { email, code } = route.params
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  // * resend code
  const [trigger, { isLoading, data }] = useFetch('resend_code', {
    method: 'POST', 
    body: JSON.stringify({ email, activation: true }),
  }, true)
  
  useEffect(() => {
    if(data && data?.code){
      setMessage("Un nouveau code de vérification est envoyé")
    }

  }, [isLoading])


  useEffect(() => {
    if(message){
      const id = setTimeout(() => {
        setMessage(null)
      }, 3000)
  
      return () => clearTimeout(id)
    }
  }, [message])
  
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
            <Text style={styles.phoneText}>{email}</Text>
          </View>
          <Formik
            initialValues={defaultValues}
            validationSchema={schemaValidation}
            onSubmit={(values) => handleAuth(values, navigation, (data?.code ?? code), setError, email)}
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
                    Je n'ai pas reçu de code. <Text onPress={async () => await trigger()} style={styles.revoy}>
                      {message ? message : isLoading ? "Envoi en cours..." : "Renvoyer le code"}
                    </Text>
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
                  <Text style={{color: 'red'}} >{error}</Text>

                </View>
                <View style={styles.buttonContainer}>
                  <EdgeButton onPress={props.handleSubmit} text="Vérifier"/>
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
  revoy : {
    color :'#33CC66',
    fontWeight: "bold",
    fontSize: 14,
  },
});

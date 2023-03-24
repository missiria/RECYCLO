import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native"
import React, { useState } from "react"
import { Formik } from "formik"
import { handleAuth, schema, defaultValues } from "./services/changePassword.services"
import ChangePasswordHeader from "../../assets/images/5.png"
import lockIcon from "../../assets/images/lock.png"
import { EdgeButton } from "~/ui/buttons/EdgeButton"

export default function ChangePassword({ navigation, route }) {
  const { email } = route.params
  const [loading, setLoading] = useState(false)
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image source={ChangePasswordHeader} />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.bigText}>Réinitialisez votre mot de pass</Text>
          <Text style={styles.descText}>
            Votre nouveau mot de pass doit être différent du mot de passe
            précédemment utilisée
          </Text>
        </View>
        <Formik
          // TODO : Import default values from services => done
          initialValues={defaultValues}
          validationSchema={schema}
          onSubmit={(values) => handleAuth(values, navigation, email, setLoading)}
        >
          {(props) => (
            <View>
              <View style={[styles.container, { marginTop: 35 }]}>
                <View>
                  <Text
                    style={[
                      styles.inputLabel,
                      props.errors.password ? { color: "red" } : null,
                    ]}
                  >
                    Nouveau Mot De Passe
                  </Text>
                  <View
                    style={[
                      styles.inputBox,
                      props.errors.password
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                  >
                    <Image
                      style={styles.iconClock}
                      source={lockIcon}
                    />
                    <TextInput
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                      onBlur={props.handleBlur("password")}
                      keyboardType="phone-pad"
                      placeholder="**********"
                      style={styles.input}
                      secureTextEntry={true}
                    />
                  </View>
                  <Text style={{ color: "red", marginTop: 2 }}>
                    {props.errors.password}
                  </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text
                    style={[
                      styles.inputLabel,
                      props.errors.retypePassword ? { color: "red" } : null,
                    ]}
                  >
                    Confirmer Le Nouveau Mot De Pass
                  </Text>
                  <View
                    style={[
                      styles.inputBox,
                      props.errors.retypePassword
                        ? { borderColor: "red", borderWidth: 1 }
                        : null,
                    ]}
                  >
                    <Image
                      style={styles.iconClock}
                      source={require("../../assets/images/lock.png")}
                    />
                    <TextInput
                      onChangeText={props.handleChange("retypePassword")}
                      value={props.values.retypePassword}
                      onBlur={props.handleBlur("retypePassword")}
                      keyboardType="phone-pad"
                      placeholder="*********"
                      style={styles.input}
                      secureTextEntry={true}
                    />
                  </View>
                  <Text style={{ color: "red", marginTop: 2 }}>
                    {props.errors.retypePassword}
                  </Text>
                </View>
              </View>
              <View style={styles.btnContainer}>
                <EdgeButton onPress={props.handleSubmit} text={loading ? <ActivityIndicator color={'#fff'} /> : "Valider"}  />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  bigText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  descText: {
    color: "#7C7C7C",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputLabel: {
    textAlign: "left",
    color: "#7C7C7C",
  },
  inputBox: {
    display: "flex",

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    padding: 10,
    borderRadius: 5,
    width: 300,
    marginTop: 10,
  },
  input: {
    paddingLeft: 10,
    fontWeight: "bold",
    width: 200,
    color: "black",
  },
  iconClock: {
    marginHorizontal: 10,
  },
});

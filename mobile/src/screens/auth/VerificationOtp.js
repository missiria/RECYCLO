import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import smsIcon from "../../assets/images/sms.png";

import {
  schemaValidation,
  handleRegister,
} from "./services/verification.services";
import { getData } from "../../hooks/hooks";
import { useMemo } from "react";
import i18next from "i18next";
import { EdgeTextInput } from "../../ui/inputs/EdgeTextInput";

export default function VerificationUser({ navigation, route }) {
  const { email, code } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null)

  // * Keep the object reference
  const memoUser = useMemo(() => user, [loading]);

  // * Set user
  useEffect(() => {
    if (!memoUser) {
      (() => {
        setLoading(true);
        setUser({ email });
        setLoading(false);
      })();
    }
  }, [memoUser]);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={smsIcon} style={styles.Img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bigText}>
          {i18next.t("login.verification_title")}{" "}
        </Text>
        <Text style={styles.smallText}>
          {i18next.t("login.verification_sub_title")}
        </Text>
        <Text style={styles.phoneText}>Verifier votre email {user?.email}</Text>
        
      </View>
      <Formik
        initialValues={{ n1: "", n2: "", n3: "", n4: "" }}
        validationSchema={schemaValidation}
        onSubmit={(values) => handleRegister(values, code, navigation, setErr, user?.email)}>
        {(props) => (
          <ScrollView>
            <View style={styles.inputsContainer}>
              <SafeAreaView style={styles.inputsStyle}>
                <EdgeTextInput
                  name="n1"
                  props={props}
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder={"*"}
                />
                <EdgeTextInput
                  name="n2"
                  props={props}
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder={"*"}
                />
                <EdgeTextInput
                  name="n3"
                  props={props}
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder={"*"}
                />
                <EdgeTextInput
                  name="n4"
                  props={props}
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder={"*"}
                />
              </SafeAreaView>
              <Text style={{}}>{err}</Text>
              <Text style={styles.TextInput}>
                {i18next.t("login.verification_resend_code")}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text onPress={props.handleSubmit} style={styles.button}>
                {i18next.t("login.verification_button")}
              </Text>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Img: {
    width: 120,
    resizeMode: "contain",
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
    marginBottom: 30,
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
  },
  input: {
    padding: 5,
    borderBottomWidth: 2,
    marginLeft: 10,
    textAlign: "center",
    borderColor: "red",
    fontWeight: "bold",
    color: "black",
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
    marginTop: 30,
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
});

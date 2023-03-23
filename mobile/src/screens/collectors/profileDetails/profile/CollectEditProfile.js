import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/EvilIcons";
import { Formik } from "formik";
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput";
import i18n from "i18next";

// Services
import {
  handleUpdate,
  schemaValidation,
  defaultValues,
} from "./services/CollectEditProfile.services";

function HorizontalLine() {
  return (
    <Text
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#A3A3A3",
      }}
    />
  );
}

export default function CollectEditProfile({ navigation }) {
  return (
    <View style={styles.containerOne}>
      <ScrollView>
        <Formik
          initialValues={defaultValues}
          validationSchema={schemaValidation}
          onSubmit={(values, { setErrors }) =>
            handleUpdate(values, navigation, setErrors)
          }
        >
          {(props) => (
            <View>
              <View style={styles.container}>
                <View style={styles.section}>
                  <Text>A prpos De vous</Text>

                  {/**last name */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.first_name ? styles.errorInput : null,
                    ]}
                    name="last_name"
                    props={props}
                    placeholder={i18n.t("login.last_name")}
                  />

                  {/** last name */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.last_name ? styles.errorInput : null,
                    ]}
                    name="first_name"
                    props={props}
                    placeholder={i18n.t("login.first_name")}
                  />

                  {/** email */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.email ? styles.errorInput : null,
                    ]}
                    name="email"
                    props={props}
                    keyboardType="email-address"
                    placeholder={i18n.t("login.email")}
                  />

                  {/** phone */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.phone ? styles.errorInput : null,
                    ]}
                    name="phone"
                    props={props}
                    keyboardType="phone-pad"
                    placeholder={i18n.t("login.phone")}
                  />

                  {/** cin */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.cin ? styles.errorInput : null,
                    ]}
                    name="cin"
                    props={props}
                    placeholder={i18n.t("login.cin")}
                  />
                </View>

                <View style={styles.breakLine} />

                <View style={styles.section}>
                  <Text>Ou Vivez Vous</Text>

                  {/** city */}
                  <View style={styles.zipBox}>
                    <View
                      style={[
                        styles.city,
                        props.errors.city ? styles.errorInput : null,
                      ]}
                    >
                      <Picker
                        selectedValue={props.values.city}
                        onValueChange={props.handleChange("city")}
                        style={styles.placeSelect}
                      >
                        <Picker.Item label="City" value="" />
                        <Picker.Item label="Agadir" value="Agadir" />
                        <Picker.Item label="Taroudant" value="Taroudant" />
                      </Picker>
                    </View>
                    <Text style={{ color: "red", marginTop: 2 }}>
                      {props.errors.city}
                    </Text>
                  </View>

                  {/** address */}
                  <EdgeTextInput
                    style={[
                      styles.textInput,
                      props.errors.country ? styles.errorInput : null,
                    ]}
                    name="address"
                    props={props}
                    placeholder={i18n.t("login.address")}
                  />
                </View>

                <View style={styles.breakLine} />

                {/** birthday */}
                <View style={styles.section}>
                  <Text>Date De Naissance</Text>
                  <View
                    style={[
                      styles.birthday,
                      props.errors.birth_day ||
                      props.errors.birth_month ||
                      props.errors.birth_year
                        ? styles.errorInput
                        : null,
                    ]}
                  >
                    <EdgeTextInput
                      style={{ fontWeight: "bold" }}
                      keyboardType="numeric"
                      maxLength={2}
                      name="birth_day"
                      props={props}
                      placeholder={i18n.t("login.birth_day")}
                    />
                    <EdgeTextInput
                      style={styles.leftBordTextInp}
                      keyboardType="numeric"
                      maxLength={2}
                      name="birth_month"
                      props={props}
                      placeholder={i18n.t("login.birth_month")}
                    />
                    <EdgeTextInput
                      style={{ fontWeight: "bold" }}
                      keyboardType="numeric"
                      maxLength={4}
                      name="birth_year"
                      props={props}
                      placeholder={i18n.t("login.birth_year")}
                    />
                  </View>
                </View>

                {/** password */}
                <View style={{ marginTop: 40 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Changer le mot de passe
                  </Text>
                  <Text style={{ color: "#7C7C7C" }}>
                    Tapez votre ancien mot de passe et tapez le nouveau mot de
                    passe et confirmez-le
                  </Text>

                  <View style={styles.passBox}>
                    {/** old password */}
                    <View style={{ padding: 30 }}>
                      <Text style={{ color: "#7C7C7C" }}>
                        Ancien Mot De Passe
                      </Text>
                      <View style={styles.textPassBx}>
                        <Icon
                          style={{
                            fontSize: 40,
                            color: "#A3A3A3",
                            marginRight: 20,
                            marginLeft: -13,
                          }}
                          name="lock"
                        />
                        <EdgeTextInput
                          style={{ color: "#262626" }}
                          secureTextEntry
                          name="current_password"
                          props={props}
                          placeholder={i18n.t("login.current_password")}
                        />
                      </View>
                    </View>

                    <HorizontalLine />

                    {/** new password */}
                    <View style={{ padding: 30 }}>
                      <Text style={{ color: "#7C7C7C" }}>
                        Nouveau Mot De Passe
                      </Text>
                      <View style={styles.textPassBx}>
                        <Icon
                          style={{
                            fontSize: 40,
                            color: "#A3A3A3",
                            marginRight: 20,
                            marginLeft: -13,
                          }}
                          name="lock"
                        />
                        <EdgeTextInput
                          style={{ color: "#262626" }}
                          secureTextEntry
                          name="new_password"
                          props={props}
                          placeholder={i18n.t("login.new_password")}
                        />
                      </View>
                    </View>

                    <HorizontalLine />

                    {/** password confirmation */}
                    <View style={{ padding: 30 }}>
                      <Text style={{ color: "#7C7C7C" }}>
                        Confirmer Le Nouveau Mot De Passe
                      </Text>
                      <View style={styles.textPassBx}>
                        <Icon
                          style={{
                            fontSize: 40,
                            color: "#A3A3A3",
                            marginRight: 20,
                            marginLeft: -13,
                          }}
                          name="lock"
                        />
                        <EdgeTextInput
                          style={{ color: "#262626" }}
                          secureTextEntry
                          name="confirm_password"
                          props={props}
                          placeholder={i18n.t("login.confirm_password")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/** actions */}
              <View style={styles.btnSaved}>
                <Text onPress={props.handleSubmit} style={styles.btnSave}>
                  Enregistrer
                </Text>
                <Text
                  style={styles.btnDefault}
                  onPress={() => props.resetForm()}
                >
                  Réinitialiser
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 20,
  },
  section: {
    padding: 30,
  },
  profileImgCard: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
    padding: 20,
    marginTop: 20,
  },
  selectType: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectBoxS: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgProfile: {
    width: 86,
    height: 86,
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  uploadImgBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#9296A1",
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "black",
  },
  breakLine: {
    height: 9,
    backgroundColor: "#F3F3F3",
    marginTop: 30,
  },
  placeSelectBpx: {
    padding: 1,
    borderWidth: 1,
    borderColor: "#9296A1",
    borderRadius: 6,
    marginTop: 15,

    fontWeight: "bold",
    color: "black",
  },
  placeSelect: {
    fontWeight: "bold",
    color: "black",
  },
  city: {
    padding: 1,
    borderWidth: 1,
    borderColor: "#9296A1",
    borderRadius: 6,
    marginTop: 15,
    fontWeight: "bold",
    color: "black",
    width: "100%",
    marginRight: 18,
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  inputZip: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#9296A1",
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "black",
    width: "47%",
  },
  birthday: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#9296A1",
    borderRadius: 6,
    marginTop: 15,
    fontWeight: "bold",
    color: "black",
  },
  leftBordTextInp: {
    borderLeftColor: "lightgray",
    borderRightColor: "lightgray",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
  },
  passBox: {
    marginTop: 30,
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: "white",
    width: "100%",
  },
  textPassBx: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  btnSaved: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnSave: {
    backgroundColor: "#33CC66",
    color: "white",
    fontWeight: "bold",
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 38,
  },
  btnDefault: {
    backgroundColor: "#ECECEC",
    color: "#262626",
    fontWeight: "bold",
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 38,
  },
});

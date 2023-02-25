import addressIcon from "../../../assets/images/address.png";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { EdgeTextInput } from "~/ui/inputs/EdgeTextInput";
import {
  handleAddressRegister,
  schema,
  defaultValues,
  getCities,
} from "./services/address.services";

export default function Address({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities(setCities);
  }, []);
  /**
   * REQUIRED : Use i18n
   */
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerBoxTwo}>
          <Image style={styles.img} source={addressIcon} />
          <Text style={styles.boldText}>Votre adresse</Text>
          <Text style={styles.lightText}>
            Veuillez choisir votre ville et votre quartier
          </Text>
          <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={(values, { setErrors }) => {
              handleAddressRegister(
                values,
                navigation,
                setErrors,
                setLoading,
                cities
              );
            }}
          >
            {(props) => (
              <View>
                {/* TODO : add this Picker component to the /ui and make it generic */}
                <View style={styles.pickerBox}>
                  <Picker
                    name="city"
                    selectedValue={props.values?.city}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => {
                      console.log("itemIndex >>", itemIndex);
                      console.log("itemValue >>", itemValue);
                      props.handleChange("city")(String(itemValue));
                    }}
                  >
                    <Picker.Item label="Choisissez votre ville" value="" />
                    {cities &&
                      cities.map((item, index) => (
                        <Picker.Item
                          label={item.name}
                          value={item.name}
                          key={index}
                        />
                      ))}
                  </Picker>
                  {props.errors.city && (
                    <Text style={{ color: "red" }}>{props.errors.city}</Text>
                  )}
                </View>
                <View>
                  <EdgeTextInput
                    name="neighborhood"
                    props={props}
                    style={styles.input}
                    placeholder={"Quartier"}
                    value={props.values.neighborhood}
                    onBlur={props.handleBlur("neighborhood")}
                    onChangeText={props.handleChange("neighborhood")}
                  />
                </View>
                <Text
                  disabled={loading}
                  onPress={props.handleSubmit}
                  style={styles.button}
                >
                  {loading ? (
                    <Text>
                      <ActivityIndicator size="small" color="#fff" />
                    </Text>
                  ) : (
                    "Suivant"
                  )}
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerBoxTwo: {
    marginHorizontal: 20,
  },
  img: {
    width: "60%",
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
  },
  lightText: {
    fontSize: 15,
    marginBottom: "5%",
    color: "#7C7C7C",
    textAlign: "center",
  },
  pickerBox: {
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },
  picker: {
    color: "#7C7C7C",
  },
  input: {
    paddingHorizontal: 10,
    marginTop: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    color: "#7C7C7C",
  },
  button: {
    marginTop: "15%",
    color: "white",
    backgroundColor: "#4ECB71",
    textAlign: "center",
    borderRadius: 5,
    paddingVertical: 15,
  },
});

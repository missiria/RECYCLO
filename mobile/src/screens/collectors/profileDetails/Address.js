import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  handleAddressRegister,
  schema,
  defaultValues,
} from "./services/address.services";
import { useFetch } from "../../../hooks/hooks";

export default function Address({ navigation }) {
  const [loading, setLoading] = useState(false);

  // * Get cities
  const { data: cities } = useFetch("cities", {});

  // * Find city id
  const [cityId, setCityId] = useState(null);

  useEffect(() => {}, []);
  console.log(cities);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerBoxTwo}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/address.png")}
          />
          <Text style={styles.boldText}>Votre adresse</Text>
          <Text style={styles.lightText}>
            Veuillez choisir votre ville et votre quartier
          </Text>
          <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={(values, { setErrors }) =>
              handleAddressRegister(values, navigation, setErrors, setLoading, cities)
            }>
            {(props) => (
              <View>
                <View style={styles.pickerBox}>
                  {console.log(props.errors)}
                  <Picker
                    selectedValue={props.values?.city}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => {
                      console.log("itemIndex >>", itemIndex);
                      console.log("itemValue >>", itemValue);
                      // setCityId()
                      props.handleChange("city")(String(itemValue));
                    }}>
                    <Picker.Item label="Choisissez votre ville" value=" " />
                    {cities?.map((item, index) => (
                      <Picker.Item
                        label={item.name}
                        value={item.name}
                        key={index}
                      />
                    ))}
                  </Picker>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    value={props.values.neighborhood}
                    placeholder="Quartier"
                    onBlur={props.handleBlur("neighborhood")}
                    onChangeText={props.handleChange("neighborhood")}
                  />
                </View>
                <Text
                  disabled={loading}
                  onPress={props.handleSubmit}
                  style={styles.button}>
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

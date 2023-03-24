import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import React from 'react'
import doneImg from '../../assets/images/done.png';

import { EdgeButton } from "~/ui/buttons/EdgeButton"

export default function Done({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.imgContainer}>
                <Image
                    source={doneImg}
                    style={styles.Img}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.bigText}>Félicitations!</Text>
                    <Text style={styles.smallText}>votre mot de passe modifié avec succès</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <EdgeButton text="Terminé" onPress={() => navigation.navigate("Login")}/>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Img: {
    width: 150,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imgContainer: {
    flex: 2,
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
    fontSize: 17,
    textAlign: "center",
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
    fontSize: 14,
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import FeedbackSentPopup from "./FeedbackSentPopup";


export default function GiveFeedback({navigation}) {
  const [starRating, setStarRating] = React.useState(0);
  const [feedback, setFeedback] = React.useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = React.useState(false);

  const onStarRatingPress = (rating) => {
    setStarRating(rating);
  };

  const onFeedbackSubmit = (bool) => {
    setFeedbackSubmitted(bool);
  };
  return (
    <View style={styles.container}>
      <FeedbackSentPopup 
        navigation={navigation} 
        visible={feedbackSubmitted} 
        setVisible={setFeedbackSubmitted}
      />
      <ScrollView >
        <Text style={styles.textTitle}>
          Appuyez sur une étoile pour l'évaluer
          sur App Store
        </Text>
        <View style={styles.stars}>
          <MaterialIcons
            name={starRating >= 1 ? "star" : "star-border"}
            size={40}
            style={styles.starUnselected}
            onPress={() => onStarRatingPress(1)}
          />
          <MaterialIcons
            name={starRating >= 2 ? "star" : "star-border"}
            size={40}
            style={styles.starUnselected}
            onPress={() => onStarRatingPress(2)}
          />
          <MaterialIcons
            name={starRating >= 3 ? "star" : "star-border"}
            size={40}
            style={styles.starUnselected}
            onPress={() => onStarRatingPress(3)}
          />
          <MaterialIcons
            name={starRating >= 4 ? "star" : "star-border"}
            size={40}
            style={styles.starUnselected}
            onPress={() => onStarRatingPress(4)}
          />
          <MaterialIcons
            name={starRating >= 5 ? "star" : "star-border"}
            size={40}
            style={styles.starUnselected}
            onPress={() => onStarRatingPress(5)}
          />
        </View>
        <Text style={styles.titleSpan}>
          Comment évaluez-vous nos services ?
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Votre commentaire"
          onChangeText={(text) => setFeedback(text)}
          value={feedback}
          multiline={true}
          numberOfLines={4}
        />
      </ScrollView>
      <View style={styles.btnBoxDec}>
        <Text
          // onPress={() => navigation.navigate("DeclarationSuccess")}
          onPress={() => setFeedbackSubmitted(true)}
          style={styles.btnDeclar}
        >
          Envoyer
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'MetropoliceMedium',
    marginHorizontal: 20,
    marginTop: 50,
    lineHeight: 27,
    letterSpacing: 1,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  starUnselected: {
    color: '#FABF35',
  },
  titleSpan: {
    marginHorizontal: 20,
    marginTop: 50,
    fontSize: 15,
    fontFamily: 'MetropoliceMedium',
  },
  textInput: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'MetropoliceMedium',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    padding: 15,
    paddingTop: 15,
    height: 120,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 15,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'MetropoliceMedium',
    color: 'white',
    backgroundColor: '#FABF35',
    width: '100%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
  },
  btnBoxDec: {
    backgroundColor: "white",
    marginTop: 50,
    paddingBottom: 27,
    paddingTop: 27,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnDeclar: {
    textAlign: "center",
    backgroundColor: "#33CC66",
    borderRadius: 6,
    marginHorizontal: 35,
    fontWeight: "bold",
    padding: 15,
    color: "white",
  },
})
import { StyleSheet, Text, View,  Image,ScrollView, TouchableOpacity,StatusBar  } from "react-native";
import i18n from "i18next";
import header from "../assets/images/1.png";
import { style } from "../assets/styles/Onboard";
import { EdgeButton } from "~/ui/buttons/EdgeButton"

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
       <StatusBar 
        style="auto"
        backgroundColor={'#33CC66'}
      />
      <Image 
        style={styles.ImageStyle} 
        source={header}
      />
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.containerText}>
          <Text style={style.TitleText}>{i18n.t("welcome.hello")}</Text>
          <Text style={style.DescText}>{i18n.t("welcome.register")}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding")}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {i18n.t("welcome.start")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  buttonContainer: {

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#33CC66',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 30,
    marginHorizontal: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'MetropoliceLight',
  },
  ImageStyle : {
   width:"100%",
   height:230,
  }
});

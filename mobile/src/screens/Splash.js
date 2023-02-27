import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import HeaderIndexLogin from "../assets/images/logo2.png";
import dnsLogo from "../assets/images/dns.png";
import asociatLogo from "../assets/images/aso.png";
import { getData } from "../hooks/hooks";

export default function Splash({ navigation }) {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState("true");

  const getStorage = async () => {
    const firstTime = await getData("FirstTime");
    setIsFirstTime(firstTime === null ? "true" : firstTime);
  };

  // TODO : there is 3 useEffect() hooks ?!! We should merge all the code inside of one!
  useEffect(() => {
    if (user == null) {
      async function getCurrentUser() {
        setUser(await getData("user"));
      }
      getCurrentUser();
    }
    getStorage();
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      if (user != null && user?.account?.type == "MENAGE") {
        navigation.replace("MenageHome");
        return;
      } else if (user != null && user?.account?.type == "COLLECTOR") {
        navigation.replace("CollectorHome");
        return;
      } else {
        if (isFirstTime == "true") {
          navigation.replace("Language");
        } else {
          navigation.replace("LoginIndex");
        }
        return;
      }
    }
  }, [authLoaded, navigation]);

  return (
    <View style={styles.container}>
        <Image style={styles.logoImg} source={HeaderIndexLogin} />
      <View style={styles.logoBottomBox}>
          <Image style={styles.logoBotom} source={dnsLogo} />
          <Image style={styles.logoBotom} source={asociatLogo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoImg: {
    flex: 5,
    justifyContent: "center",
    width: 100,
    height: 110,
    resizeMode:'contain'
  },
  logoBottomBox : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    gap: 10
  },
  logoBotom : {
    width: 70,
    height: 70,
    resizeMode:'contain',
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30
  }
});

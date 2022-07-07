import {useEffect,useState} from 'react';
import { StyleSheet,View, Image} from "react-native";
import HeaderIndexLogin from "../assets/images/logo_2.png"
import {getData} from "../hooks/hooks";

export default function Splash({navigation}) {

  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState('true');

  const getStorage = async () => {
      const firstTime = await getData('FirstTime');
      setIsFirstTime(firstTime === null?'true':firstTime);
  };

  useEffect(() => {
    
    if(user == null)
    {
      async function getCurrentUser(){
          setUser(await getData('user'));
      }  
      getCurrentUser();

    }

    getStorage();

  },[user]);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {

    if (authLoaded) {
      console.log(user);
      if(user != null && user.account.type == "MENAGE"){
        navigation.replace('Home');
        return;        
      }
      else if(user != null && user.account.type == "COLLECTOR"){
        navigation.replace('CollectorHome');
        return;
      }
      else{
        if(isFirstTime == 'true'){
          navigation.replace('Language');
        }
        else{
          navigation.replace('LoginIndex');
        }
        return;      
      }

    }
  }, [authLoaded, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoImg}>
        <Image source={HeaderIndexLogin} />
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
  }
});

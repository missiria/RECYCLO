import { StyleSheet, View, Text } from "react-native";
import RootStack from "./src/routes/RootStack";
import "./src/locales";
import { Provider } from "react-redux";
import store from "./redux/store";
import i18n from "i18next";
// import "react-native-gesture-handler";
import MetropoliceBold from './src/assets/fonts/TrueType/Metropolis-ExtraBold.ttf';
import MetropoliceLight from './src/assets/fonts/TrueType/Metropolis-Regular.ttf';
import MetropoliceSemiBold from './src/assets/fonts/TrueType/Metropolis-SemiBold.ttf';
import MetropoliceMedium from './src/assets/fonts/TrueType/Metropolis-Medium.ttf';

import { useFonts } from 'expo-font'
export default function App() {
  const isArab = i18n.language == "ar" ? true : false;
  const [loaded] = useFonts({
    MetropoliceBold:  MetropoliceBold,
    MetropoliceLight:  MetropoliceLight,
    MetropoliceSemiBold:  MetropoliceSemiBold,
    MetropoliceMedium:  MetropoliceMedium,
  });

  if (!loaded) {
    return null;
  }
   
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

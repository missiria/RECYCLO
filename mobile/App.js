import { StyleSheet, View } from "react-native";
import RootStack from "./src/routes/RootStack";
import "./src/locales";
import { Provider } from "react-redux";
import store from "./redux/store";
// import "react-native-gesture-handler";

export default function App() {
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

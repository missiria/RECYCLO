import { StyleSheet, View } from "react-native";
import RootStack from "./src/routes/RootStack";
import "./src/locales";

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

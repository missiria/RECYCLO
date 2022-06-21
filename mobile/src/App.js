import { StyleSheet, View } from "react-native";
import RootStack from "./routes/RootStack";
import "./locales";

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

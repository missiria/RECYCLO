import React from "react";
import { StyleSheet,Text } from "react-native";

export function EdgeButton({text, onPress}) {
  return (
    <Text style={styles.button} onPress={onPress}>
        {text}
    </Text>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#33CC66",
      borderRadius: 100,
      padding: 15,
      width: 300,
      color: "white",
      textAlign: "center",
      borderRadius: 7,
      fontWeight: "bold",
    }
});

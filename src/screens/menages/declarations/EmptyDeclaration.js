import {
    View,
    Text,
    StyleSheet,
    React,
  } from "react-native";
  import i18n from "i18next";
  
  export default function EmptyDeclaration() {
    return (
      <View style={styles.container}>
        <View style={styles.notFound} >
            <Text style={styles.notFoundText} >
            {i18n.t("declarationEmpty.title")}
            </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: "white",
    },
    notFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      notFoundText: {
        color: "#999"
      },
  });
  
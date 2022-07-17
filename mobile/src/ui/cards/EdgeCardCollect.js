import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export function EdgeCardCollect({text, onPress,img,style,imageStyle}) {
  return (
    <TouchableOpacity
    onPress={ () => onPress}
    style={[styles.card, style]}
    >
        <View>
            <Image
                style={[styles.cardImg,imageStyle]}
                source={{uri:img}}
            />
        </View>
        <View style={styles.cardBody}>
            <Text style={styles.titleCollect}>{text}</Text>
            <Text>
            <Icon style={styles.btnIconPlus} name="squared-plus" />
            </Text>
        </View>
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginLeft: -5,
        marginRight: -5,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 5,
        shadowColor: "#495371",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
    },
    cardImg: {
        width: "100%",
        resizeMode: "contain",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
    },
    cardBody: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    
        width: "100%",
        padding: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        shadowColor: "#495371",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
        marginTop: -4,
    },
    titleCollect: {
        color: "black",
        fontWeight: "bold",
    },
    btnIconPlus: {
        color: "#33CC66",
        fontSize: 23,
    },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export function EdgeCardDeclaration({text, onPress,img,style,imageStyle}) {
  return (
    <TouchableOpacity
    onPress={onPress}
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

});

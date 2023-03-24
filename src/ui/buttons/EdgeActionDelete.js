import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icond from 'react-native-vector-icons/FontAwesome';
import i18n from "i18next";

export function EdgeActionDelete({onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.text}>
            {i18n.t("menageDemend.delete")}
        </Text>
        <Text>
            <Icond
            style={styles.icon}
            name='trash'
            />
        </Text>
    </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        marginRight: 10,
    },
    icon: {
        color: 'black',
        fontSize: 16,
    }
});

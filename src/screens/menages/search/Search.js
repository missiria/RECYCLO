import { View, Text, TextInput, StyleSheet,Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import i18n from "i18next";

export default function Search() {
    const getLocation = () => {
        Alert.alert("Using This Button For Get Current Location");
    }
    return (
        <View>
            <View style={styles.boxSearch}>
                <View>
                    <Text>
                        <Icon
                            style={styles.iconstStyle}
                            name="search"
                        />
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={i18n.t("homeManage.search_placeholder")}
                    />
                </View>
                <View>
                    <MaterialIcons
                        onPress={getLocation}
                        style={styles.iconstStyle}
                        name="my-location"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderColor:'#D8D8D8',
        borderWidth:0.6,
        padding: 10,
        marginHorizontal:11,
        marginTop:20,
        borderRadius:10,
    },
    iconstStyle : {
        fontSize:25,
        color: '#33CC66',
        fontWeight:'bold',
    },
    inputStyle  : {
        color: 'black',
        width: 220,
        textAlign:'center'
    },
})
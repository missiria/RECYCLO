import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ConditionProps(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mon retrait via {props.type}</Text>
            <View style={styles.boxCountMony}>
                <Text style={styles.boxTitle}>Total à retirer à la commande</Text>
                <View style={styles.boxFooter}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Montant</Text>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{props.count} Dhs</Text>
                </View>
            </View>
            <View style={styles.descBottomBox}>
                <Icon
                    style={{ fontSize: 22, color: '#A3A3A3', marginRight: 12, marginLeft: -4 }}
                    name={props.icon}
                />
                <View >
                    <Text style={{ fontWeight: 'bold',fontSize:18,marginTop:-5 }}>
                        {props.textBtm}
                    </Text>
                    <Text style={{ fontSize:13,marginTop:10}}>
                        {props.textBtmDesc}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    boxCountMony: {
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 25,
    },
    boxTitle: {
        fontWeight: 'bold',
        padding: 15,
        paddingHorizontal: 23,
    },
    boxFooter: {
        flexDirection: 'row',
        padding: 15,
        paddingHorizontal: 23,
        backgroundColor: '#33CC66',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'space-between'
    },
    descBottomBox : {
        flexDirection: 'row',
        marginTop:50,
    }
})
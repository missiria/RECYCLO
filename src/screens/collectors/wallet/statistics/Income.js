import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import poser from '../../../../assets/images/poser.png'

export default function Income() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bodyBoxCard}>
                <View style={styles.boxContetnLeft}>
                    <View>
                        <Image
                            source={poser}
                            style={styles.iconBody}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardTitle}>
                            Transfer de grossiste
                        </Text>
                        <View style={styles.textDateTime}>
                            <Text style={styles.date}>18-04-2022</Text>
                            <Text style={styles.date}>18:22</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxContetnRight}>
                    <Text style={styles.boxPriceGreen}>
                        +700.00 Dhs
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.miniBreakLine}></View>
            <TouchableOpacity style={styles.bodyBoxCard}>
                <View style={styles.boxContetnLeft}>
                    <View>
                        <Image
                            source={poser}
                            style={styles.iconBody}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardTitle}>
                            Transfer de grossiste
                        </Text>
                        <View style={styles.textDateTime}>
                            <Text style={styles.date}>18-04-2022</Text>
                            <Text style={styles.date}>18:22</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxContetnRight}>
                    <Text style={styles.boxPriceGreen}>
                        +700.00 Dhs
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        marginHorizontal:20,
        marginTop:20,
    },
    bodyBoxCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 15,
    },
    boxContetnLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textDateTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBody: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    cardTitle: {
        color: 'black',
        fontWeight: 'bold',
    },
    date: {
        color: '#A3A3A3',
        marginRight: 15,
        fontSize: 11,
        marginTop: 9,
    },
    boxPriceGreen: {
        color: '#33CC66',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
    },
    boxPriceBlue: {
        color: '#5B68F6',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
    },
    miniBreakLine: {
        marginTop: 20,
        height: 1,
        width: "100%",
        backgroundColor: '#E5E5E5'
    },
 
})
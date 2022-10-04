import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React,{useState} from 'react'
import FooterNav from '../../navigation/FooterNav';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import iconDown from '../../../../assets/images/down.png'
import iconUp from '../../../../assets/images/up.png'
import Income from './Income';
import Expenses from './Expenses';

export default function Statistics({ navigation }) {
    const [showType, setShowType] = useState('Revenues');
    const checkWhatisType = () => {
        if(showType == 'Revenues') {
            return (
                <Income />
            );
        }else if(showType == 'Dépenses') {
            return (
                <Expenses />
            );
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.chart}>
                        <View style={styles.boxChart}>
                            <LineChart
                                data={{
                                    labels: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                                    datasets: [
                                        {
                                            data: [1, 10, 20, 300, 400]
                                        },
                                        {
                                            data: [30, 54, 503, 100, 8, 82, 182],
                                            strokeWidth: 6,
                                            stroke: "blue",
                                            fill: "blue",
                                            pointColor: "blue",
                                            pointStrokeColor: "#fff",
                                            pointHighlightFill: "#fff",
                                            pointHighlightStroke: "blue"

                                        },
                                    ]
                                }}

                                width={Dimensions.get("window").width} // from react-native
                                height={220}
                                yAxisScaleEnabled={true}

                                yAxisLabel=""
                                yAxisSuffix=""
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{

                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                }}
                                bezier
                                style={styles.charStyle}
                            />
                        </View>
                    </View>
                    <View style={styles.boxCounts}>
                        <View style={styles.boxCounters}>
                            <Image
                                style={styles.iconStatistic}
                                source={iconDown}
                            />
                            <View>
                                <Text style={styles.textStatisticMini}>Revenues</Text>
                                <Text style={styles.textStatisticBoldGreen}>700.00 Dh</Text>
                            </View>
                        </View>
                        <View style={styles.boxCounters}>
                            <Image
                                style={styles.iconStatistic}
                                source={iconUp}
                            />
                            <View>
                                <Text style={styles.textStatisticMini}>Revenues</Text>
                                <Text style={styles.textStatisticBoldBlue}>700.00 Dh</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.breackLine}></View>
                    <View style={styles.chaseIsWho}>
                        <TouchableOpacity
                            onPress={() => setShowType('Revenues')}
                        >
                            <Text 
                                style={showType == 'Revenues' ? styles.revenuesTextBackground : styles.revenuesText}>
                                Revenues
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setShowType('Dépenses')}
                        >
                            <Text 
                                style={showType == 'Dépenses' ? styles.revenuesTextBackgroundTwo : styles.revenuesTextTwo}>
                                Dépenses
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {checkWhatisType()}
                    </View>
                </View>
            </ScrollView>
            <FooterNav
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    charStyle: {
        borderRadius: 5,
        marginLeft: -10,
        marginRight: 20,
        marginHorizontal: 20,
    },
    boxChart: {
        marginHorizontal: 20,
    },
    boxCounts: {
        marginTop: 25,
        marginHorizontal: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxCounters: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius:10,
        padding: 10,
        width: "49%",
        marginBottom:20,
    },
    iconStatistic : {
        width: 50,
        height: 50,
        marginRight:10,
    },
    textStatisticMini : {
        fontSize:12,
        color:'#A3A3A3'
    },
    textStatisticBoldGreen : {
        fontWeight:'bold',
        fontSize:17,
        color:'#33CC66',
    },
    textStatisticBoldBlue : {
        fontWeight:'bold',
        fontSize:17,
        color:'#5B68F6',
    },
    breackLine : {
        marginTop:10,
        height: 10,
        width: "100%",
        backgroundColor:'#F8F8F8'
    },
    chaseIsWho: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:20,
    },
    revenuesText : {
        borderColor:'#33CC66',
        borderWidth:2,
        padding: 8,
        borderRadius:50,
        paddingHorizontal:50,
        textAlign: 'center',
        color: '#33CC66'
    },
    revenuesTextBackground : {
        borderColor:'#33CC66',
        backgroundColor:'#33CC66',
        borderWidth:2,
        padding: 8,
        borderRadius:50,
        paddingHorizontal:50,
        textAlign: 'center',
        color: 'white'
    },


    revenuesTextTwo : {
        borderColor:'#5B68F6',
        borderWidth:2,
        padding: 8,
        borderRadius:50,
        paddingHorizontal:50,
        textAlign: 'center',
        color: '#5B68F6'
    },
    revenuesTextBackgroundTwo : {
        borderColor:'#5B68F6',
        backgroundColor:'#5B68F6',
        borderWidth:2,
        padding: 8,
        borderRadius:50,
        paddingHorizontal:50,
        textAlign: 'center',
        color: 'white'
    },


})
import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import SlidersData from './SlidersData';
import Swiper from 'react-native-swiper'

export default function AdsSwiper() {

    return (
        <Swiper 
            removeClippedSubviews={false}
            style={styles.wrapper}
            showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
        >
            {
                SlidersData.map((item, index) => {
                    return (
                        <View key={index}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    )
                })
            }
        </Swiper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slider: {
        height: 135,
        width: '100%',
    },
    sliderImageBox: {
        width: '93.4%',
        marginTop: 25,
        height: 135,
        borderRadius: 8,
    },
    wrapper : {
        height: 135,
        marginTop: 25,
    },
    image : {
        width: '92.5%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: 135,
        resizeMode: 'cover',
    },
    dot : {
        backgroundColor: '#fff',
        opacity: 0.6,
        width: 6,
        height: 6,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: -15,
    },
    activeDot : {
        backgroundColor: '#53C330',
        width: 6,
        height: 6,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: -15,
    },
})
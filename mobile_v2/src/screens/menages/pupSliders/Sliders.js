import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react';
import SlidersItems from './SlidersItems';
import SlidersData from './SlidersData';
import Pagination from './Pagination';


export default function Sliders() {
    const [currentIndex, seCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);


    const viewableItemsChanged = useRef(({ viewableItems }) => {

        seCurrentIndex(viewableItems[0].index);

    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {

        if (currentIndex < SlidersData.length - 1) {

            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });

        } else {
            console.log("last Item");
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={SlidersData}
                    renderItem={({ item }) => <SlidersItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces="false"
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <View style={styles.paginate}>
                <Pagination
                    data={SlidersData}
                    scrollX={scrollX}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    paginate : {
        marginHorizontal:30,
        position:'absolute',
        top:120,

    },
});
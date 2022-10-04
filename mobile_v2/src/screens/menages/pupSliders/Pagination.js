import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';


const Pagination = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ flexDirection: 'row', height: 46 }}>
            {
                data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [15, 20, 23],
                        extrapolate: 'clamp',
                    });

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.2, 1, 0.2],
                        extrapolate: 'clamp',
                    })

                    return (
                        <Animated.View
                            style={[
                                styles.dot, {
                                    width: dotWidth,
                                    opacity,
                                }
                            ]}
                            key={i.toString()}
                        />
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        height: 6,
        borderRadius: 5,
        backgroundColor: '#33CC66',
        marginHorizontal: 8,
    },
})

export default Pagination;

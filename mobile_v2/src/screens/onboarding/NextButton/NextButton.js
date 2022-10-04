import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react';
import i18n from 'i18next';

export default function NextButton({ percentage, scrollTo }) {
    const size = 108;
    const strokeWidth = 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);


    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }
    useEffect(() => {
        animation(percentage);
    }, [percentage]);
    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        } )
        } , []);
    return (
        <View style={styles.container}>
            <Text onPress={scrollTo} style={styles.button} >
               {i18n.t("introduction.next")}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#33CC66',
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 5,
      marginBottom: 30,
      width: 360,
      maxWidth: "100%",
      color: 'white',
      fontFamily: 'MetropoliceLight',
    },
})
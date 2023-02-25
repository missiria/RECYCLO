import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

export const  stylesRtl = StyleSheet.create({
    rtlStyleInput : {
        textAlign: 'right',
        paddingLeft: 0,
        paddingRight: 10,
    },
    rtlStyleText : {
        textAlign: 'right',
    },
    rtlStyle : {
        flexDirection: 'row-reverse',
        textAlign: 'right',
    },
});
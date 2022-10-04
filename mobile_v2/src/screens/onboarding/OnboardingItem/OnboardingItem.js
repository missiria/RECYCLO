import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import i18n from 'i18next';

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image]}
      />
      <View style={styles.contentSection}>
        <Text style={styles.title}>
          {i18n.language == "fr" ? item.titleFr : item.titleAr}
        </Text>
        <Text style={styles.description}>
          {i18n.language == "fr" ? item.descriptionFr : item.descriptionAr}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '60%',
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    maxWidth: "70%",
    alignSelf: 'center',
    paddingHorizontal: 30,
    fontFamily: 'MetropoliceBold',
    lineHeight: 30,
    letterSpacing: 0.5,

  },
  description: {
    fontWeight: '300',
    color: '#A3A3A3',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontFamily: 'MetropoliceLight',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
    letterSpacing: 0.5,
    lineHeight: 23,
  },
  contentSection: {
    flex: 0.5,
  }
})
import { StyleSheet, View, Text, FlatList, Animated } from "react-native"
import React, { useState, useRef } from "react"
import i18n from "i18next"
import { slides } from "./slides"
import OnboardingItem from "./OnboardingItem/OnboardingItem"
import Pagination from "./Pagination"
import NextButton from "./NextButton/NextButton"

export default function Onboarding({ navigation }) {
  const [currentIndex, seCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    seCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last Item");
    }
  };

  {/* Separate this component in folder */}

  const terminiOnb = () => {
    if (currentIndex >= 2) {
      return (
        <View style={styles.container}>
          <Text
            onPress={() => navigation.navigate("LoginIndex")}
            style={styles.button}
          >
            {i18n.t('introduction.finished')}
          </Text>
        </View>
      );
    } else {
      return (
        <NextButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slides.length)}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces="false"
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Pagination data={slides} scrollX={scrollX} />
      {terminiOnb()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#33CC66",
    borderRadius: 100,
    padding: 15,
    width: 300,
    color: "white",
    textAlign: "center",
    borderRadius: 7,
    fontWeight: "bold",
  },
});

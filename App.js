import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated
} from "react-native";

const App = () => {
  const animatedValue1 = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  const animate = () => {
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);
    animatedValue3.setValue(0);
    const createAnimation = (value, toValue, duration) => Animated.timing(
      value,
      {
        toValue,
        duration,
        useNativeDriver: false
      }
    );
    Animated.parallel([
      createAnimation(animatedValue1, 100, 1000),
      createAnimation(animatedValue2, 700, 1500),
      createAnimation(animatedValue3, 350, 2000)
    ]).start(() => {
      Animated.parallel([
        createAnimation(animatedValue1, 0, 1000),
        createAnimation(animatedValue2, 0, 1500),
        createAnimation(animatedValue3, 0, 2000)
      ]).start()
    });
  };

  return (
    <View style={styles.container}>
      <Text>Animations Demo</Text>
      <Button onPress={animate} title="Animate" />
      <Animated.View
        style={{
          height: 140, width: 140, backgroundColor: "red", marginTop: animatedValue1
        }}
      />
      <Animated.View
        style={{
          height: 140, width: 140, backgroundColor: "green", marginLeft: animatedValue2
        }}
      />
      <Animated.View
        style={{
          height: 140, width: 140, backgroundColor: "blue", marginTop: animatedValue3
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30
  }
});

export default App;
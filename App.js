import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated
} from "react-native";

const App = () => {
  const animatedValue = new Animated.Value(0);
  const animate = () => {
    Animated.timing(
      // 1. animated property
      // 2. config
      animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }
    ).start();
  }
  const margin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  });
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "blue"]
  });
  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });
  return (
    <View style={styles.container}>
      <Text>Animations Demo</Text>
      <Button onPress={animate} title="Animate" />
      <Animated.View
        style={{
          height: 150, width: 150, backgroundColor, marginTop: margin, marginLeft: margin,
          transform: [{
            rotate: rotation
          }]
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
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  Alert
} from "react-native";

const App = () => {
  const alert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "Ask me later", onPress: () => console.log("Ask me later pressed") },
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text>Form Demo</Text>
      <Button onPress={alert} title="Alert" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 14
  },
  input: {
    padding: 8,
    height: 50,
    borderWidth: 1,
    borderColor: "#666"
  }
});

export default App;
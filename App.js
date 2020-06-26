import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

// import {
//   Colors
// } from "react-native/Libraries/NewAppScreen";


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row"
    justifyContent: "space-between",
    alignItems: "center"
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    margin: 10
  }
});

export default App;

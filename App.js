import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// import {
//   Colors
// } from "react-native/Libraries/NewAppScreen";


const App = () => {
  const onPress = () => {
    alert("Button Pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.button}
        underlayColor="rgba(50, 183, 255, .8)"
      >
        <View style={styles.textContainer}>
          <Icon name="home" size={20} color="white" />
          <Text style={styles.text}>
            HOME
        </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: "rgba(50, 183, 255, 1)",
    borderRadius: 30,
    padding: 17,
    margin: 10
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 15
  }
});

export default App;

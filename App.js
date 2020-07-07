import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from "react-native";

const App = () => {
  const renderItems = () => {
    return people.map(renderItem);
  };
  const renderItem = (item, index) => {
    return <Text key={index} style={styles.text}>{item.name} is {item.age} years old</Text>
  };
  const people = [
    { name: "Melvin", age: 29 },
    { name: "Jessica", age: 25 },
    { name: "Jocelyn", age: 17 },
  ];

  return (
    <View style={styles.container}>
      {renderItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 22
  }
});

export default App;

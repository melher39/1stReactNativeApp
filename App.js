import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  FlatList
} from "react-native";

const App = () => {
  const renderItem = ({ item }) =>
    <View style={{ padding: 15, borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ color: "rgba(0,0,0,.5)" }}>Age: {item.age}</Text>
    </View>
    ;

  const people = [
    { name: "Melvin", age: 29 },
    { name: "Jessica", age: 25 },
    { name: "Jocelyn", age: 17 },
    { name: "Jason", age: 20 },
    { name: "Martina", age: 21 },
    { name: "Abel", age: 32 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item, index) => item.name}
        renderItem={renderItem}
      />
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

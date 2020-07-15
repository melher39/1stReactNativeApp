import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  FlatList
} from "react-native";

const people = [
  { name: "Melvin", age: 29 },
  { name: "Jessica", age: 25 },
  { name: "Jocelyn", age: 17 },
  { name: "Jason", age: 20 },
  { name: "Martina", age: 21 },
  { name: "Jackie", age: 37 }
];

const App = () => {
  const [names, setNames] = useState(people);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    console.log("refreshing...")
    setRefreshing(true);
    setTimeout(() => {
      const newPeople = [
        ...names,
        { name: "Tony", age: 32 },
        { name: "John", age: 40 },
        { name: "Amanda", age: 25 }
      ];
      setNames(newPeople);
      setRefreshing(false);
    }, 2400);
    console.log("new names: ", names);
  };
  const renderItem = ({ item }) =>
    <View style={{ padding: 15, borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ color: "rgba(0,0,0,.5)" }}>Age: {item.age}</Text>
    </View>;

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={onRefresh}
        refreshing={refreshing}
        data={names}
        keyExtractor={(item, index) => item.name + index}
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

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button
} from "react-native";

const App = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [input, setInput] = useState({ username: "", password: "", formData: "" });
  const onChangeText = (key, val) => {
    setInput(input => ({ ...input, [key]: val }));
  };

  const submit = () => {
    const userData = {
      username: input.username,
      password: input.password,
      signedIn: true
    };
    setInput(input => ({ ...input, formData: JSON.stringify(userData) }));
  };

  return (
    <View style={styles.container}>
      <Text>Form Demo</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={val => onChangeText("username", val)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={val => onChangeText("password", val)}
        style={styles.input}
        secureTextEntry
      />
      <Button onPress={submit} title="Submit" />
      <Text>Input State: {input.username} and {input.password} and {input.formData}</Text>
      <Text>state formData: {input.formData}</Text>
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
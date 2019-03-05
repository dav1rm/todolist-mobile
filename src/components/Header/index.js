import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const Header = props => (
  <View style={styles.header}>
    <TextInput
      style={styles.input}
      placeholder="What needs to be done?"
      value={props.newTodo}
      onChangeText={props.handleInputChange}
      onKeyPress={e => e.keyCode !== 13}
      onSubmitEditing={props.handleAddTodo}
      returnKeyType="send"
    />
    <TouchableOpacity style={styles.button} onPress={props.handleAddTodo}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  </View>
);

export default Header;

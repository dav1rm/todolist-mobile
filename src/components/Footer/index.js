import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Footer = ({ todos }) => (
  <View style={styles.footer}>
    <View>
      <Text>Total: {todos.length}</Text>
    </View>
    <View>
      <Text>
        Finalizados: {todos.filter(todo => todo.done === true).length}
      </Text>
    </View>
  </View>
);

export default Footer;

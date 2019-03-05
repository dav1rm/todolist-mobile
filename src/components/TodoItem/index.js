import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class TodoItem extends Component {
  state = {
    edit: false,
    content: ""
  };

  handleEdit = async () => {
    const { todo, handleUpdateTodo } = this.props;
    const { content } = this.state;

    await handleUpdateTodo(todo, { content });

    this.setState({ edit: false, content: "" });
  };

  handleInputChange = text => {
    this.setState({ content: text });
  };

  render() {
    const { todo, handleUpdateTodo, handleDeleteTodo } = this.props;
    const { edit } = this.state;
    return (
      <View style={styles.todoItem}>
        {edit ? (
          <View style={styles.formContent}>
            <TextInput
              style={styles.input}
              onChangeText={this.handleInputChange}
              value={this.state.content}
              onSubmitEditing={this.handleEdit}
              returnKeyType="send"
            />
            <TouchableOpacity style={styles.button} onPress={this.handleEdit}>
              <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.viewContent}>
            <Text
              style={[styles.textContent, todo.done ? styles.done : ""]}
              onLongPress={() =>
                this.setState({ edit: true, content: todo.content })
              }
            >
              {todo.content}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleUpdateTodo(todo, { done: !todo.done })}
            >
              <Text style={styles.textButton}>
                {todo.done ? "Undone" : "Done"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDeleteTodo(todo)}
        >
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import ToDoApp from "./src/ToDoApp";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ToDoApp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})

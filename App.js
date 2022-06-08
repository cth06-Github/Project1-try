import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.firstcontainer}>
    <View style={styles.secondcontainer}></View>
      <Text style={styles.paragraph}>
      I think coding is Gitgitgit at first.
      </Text>
    <View style={styles.thirdcontainer}></View>
      <Text style={styles.paragraph}>
      I think coding is great at first.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'red',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 2,
    backgroundColor: 'yellow',
  },
  secondcontainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
    padding: 8,
  },
  thirdcontainer: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'green',
    padding: 8,
  },
});
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class AllResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'All Results',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your produce has gone rotten!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ADD8E6',
  },
});

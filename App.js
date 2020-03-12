import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>數位三甲 110619024 蔡瑀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9E5ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';

function MyText({textToDisplay}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {textToDisplay} </Text >
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '50%',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'dodgerblue',
    fontWeight: 'bold',
  }
})

export default MyText;

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


function MyButton({title, color, onPress, width}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, width: width} ]}
      onPress={onPress}>
      <Text style={styles.text}>
      {title} 
      </Text >
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ee0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: '50%',
    marginVertical: 10,
  },
  
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default MyButton;

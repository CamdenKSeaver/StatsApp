import { isColorSupported } from 'picocolors';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';


function MyButton({title, onPress, width, height, marginTop, marginLeft}) {
  return (

    <TouchableHighlight style={[styles.button, height = {height}, width = {width},marginTop ={marginTop}, marginLeft ={marginLeft}]} 
      underlayColor = {colors.primaryBlue}
      onPress={onPress}
      
   
      >
      
      
      

      <Text style={styles.text}>
      {title} 
      </Text >
     
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 3.5,
    borderColor: colors.primaryBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    
    marginVertical: 10,
  },
  
  text: {
    fontSize: 14,
    color: colors.primaryBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default MyButton;

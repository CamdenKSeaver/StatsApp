import { isColorSupported } from 'picocolors';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import { Player } from './Player';




function PlayerName(onChangeText, value, placeholder, ) {
  return (
    <View style = {styles.textBox}>
        <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        
       
        />
    </View>
  );
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: '#f5f5f5',
        width: '75%',
        height: 40,
        marginLeft: '5%'
        
        
    
      
        
       
      },
  
  text: {
    fontSize: 14,
    color: colors.primaryBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default PlayerName;

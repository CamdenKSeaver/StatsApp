import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

export default function NewGame({ navigation, route }) {
  

    const [selected, setSelected] = React.useState("");
    
    const data = [
        {key:'1', value:'Team 1'},
        {key:'2', value:'Team 2'},
        {key:'3', value:'Team 3'},
        {key:'4', value:'Team 4'},
        {key:'5', value:'Team 5'},
        {key:'6', value:'Team 6'},
        {key:'7', value:'Team 7'},
    ]
    console.log(data);
  return (
    <View style={styles.container}>
     
        <Image
          style= {{width: '90%', height:'9%',marginTop: '10%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
  
      <View style={[styles.lineContainer, {marginTop: '6%'}]}>
      </View>
      
      <View style={{paddingHorizontal:15,marginTop:15}}>
        <SelectList 
        data={data} setSelected= {setSelected} 
        placeholder= {"Select Team"}
        />
      </View>
      
        <MyButton 
          marginTop=' 6%'
          title='Create Team'
          width= {'60%'}
          height= {'7%'}
          onPress={() => {
            navigation.navigate("Create Team")}}
          
        />
     
       
        <MyButton 
          title='Back'
          width= {'60%'}
          height= {'7%'}
          marginTop=' 6%'
          onPress={() => {
            navigation.navigate("Home")}}
        />
      
      <View style={styles.teamContainer}>
        
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },


  

  lineContainer: {
    height: '.7%',
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  space: {
    width: 20, 
  },

  teamContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
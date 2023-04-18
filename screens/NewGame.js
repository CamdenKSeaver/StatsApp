import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import colors from '../App/config/colors';
import { bold } from 'picocolors';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { Player } from '../App/components/Player';

export default function NewGame({ navigation, route }) {
  

    const [selected, setSelected] = React.useState("");
    
    const data = [
        {key:'1', value:'Fremd'},
        {key:'2', value:'Palatine'},
        {key:'3', value:'Rolling Meadows'},
        {key:'4', value:'Scahumburg'},
        {key:'5', value:'Conant'},
        
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
      
      <View style ={styles.width}>
        <SelectList 
        data={data} setSelected= {setSelected} 
        placeholder= {"              Select Team               "}
        boxStyles={{height: '36%', width: '100%',  borderColor: colors.primaryBlue, borderRadius: 20, borderWidth: 3.5}} 
        dropdownStyles={{borderColor: colors.primaryBlue, borderRadius: 20, borderWidth: 3.5}}
        dropdownTextStyles={{color: colors.primaryBlue, fontSize: 14, fontWeight: 'bold'}}
        inputStyles={{color: colors.primaryBlue, fontSize: 14, fontWeight: 'bold'}}
        maxHeight= {100}
        
        
      

        />
     
        <MyButton 
       marginTop={'-30%'}
          title='Start'
          width= {'100%'}
          height= {'13%'}
          onPress={() => {
            navigation.navigate("Take Stats")}}
          
        />
        
        <MyButton 
          
          title='Create Team'
          width= {'100%'}
          height= {'13%'}
          onPress={() => {
            navigation.navigate("Create Team")}}
          
        />
     
       
        <MyButton 
          title='Back'
          width= {'100%'}
          height= {'13%'}
          
          onPress={() => {
            navigation.navigate("Home")}}
        />
      </View>
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
  selecCont: {
    height: '20%',
    width: '20%'
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
  width: {
    width : '60%',
    height: '50%',
   justifyContent: 'space-evenly'
  }

});
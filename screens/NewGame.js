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
import { Player, Team } from '../App/components/Player';
import TeamsList from '../App/components/TeamList';


export default function NewGame({ navigation, route }) {
  

    const [selected, setSelected] = React.useState("");
    
    // const data = [
    //     {key:'1', value:'Fremd'},
    //     {key:'2', value:'Palatine'},
    //     {key:'3', value:'Rolling Meadows'},
    //     {key:'4', value:'Scahumburg'},
    //     {key:'5', value:'Conant'},
        
    // ]
    // console.log(data);
  return (
    <View style={styles.container}>
     
        <Image
          style= {{width: '90%', height:'9%',marginTop: '10%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
  
      <View style={[styles.lineContainer, {marginTop: '6%'}]}>
      </View>
      <View style={[styles.buttonContainer,{marginTop: '0%'}]}>
        <View style = {styles.row}>

        
        <MyButton 
          title='Create Team'
          width= {'40%'}
          height= {75}
          onPress={() => {
            navigation.navigate("Create Team")}}
         />
        
        
        
   
          <MyButton 
            title='Back'
            width= {'40%'}
            height= {75}
            marginLeft= {'3.33%'}
            onPress={() => {
              navigation.navigate("Home")}}
           />
        
        
        </View>
        <Text style = {styles.text}>Select Team</Text>
      </View>
      
      
      
        
       <View style = {styles.flatlist}>
        <TeamsList></TeamsList>
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
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryBlue
  },
  buttonContainer: {
  
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    height: '15%'
    
 
  },
  row:{
    flexDirection: 'row'
  },
  flatlist:{
    width: '100%',
    height: '80%',
    
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
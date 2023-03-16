import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import MyTextInput from '../App/components/MyTextInput';
import {Player, Team} from '../App/components/Player';
import React, { useState } from 'react';
import PlayerName from '../App/components/PlayerName';


export default function CreateTeam({ navigation, route }) {
  
  const [playerName, setPlayerName] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');

  const [team, setTeam] = useState(null);

  function handleCreateTeam() {
    const player1 = new Player(playerName, playerNumber);
    const player2 = new Player('John Doe', 25);
    const player3 = new Player('Jane Doe', 27);
    const players = [player1, player2, player3];
    const newTeam = new Team(players);
    setTeam(newTeam);
  }
  return (





    <ScrollView style = {styles.wholeConatiner}>
      
    <View style={styles.container}>
     
        <Image
          style= {{width: '90%', height:'30%',marginTop: '8%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
  
      <View style={[styles.lineContainer, {marginTop: '6%'}]}>
        </View>
      <View style={[styles.buttonContainer,{marginTop: '5%'}]}>
        <MyButton 
          title='Save Team'
          width= {'40%'}
          height= {'100%'}
          onPress={() => navigation.push("Home")}
        />
       
        <MyButton 
          title='Back'
          width= {'40%'}
          height= {'100%'}
          marginLeft= {'3.33%'}
          onPress={() => {
            navigation.navigate("Home")}}
        />
        
      </View>
      

      <StatusBar style="auto" />
      
    </View>
    
    <View style = {styles.playersContainer}>


    <View style = {styles.horizntal}>
        <TextInput style = {styles.textBox}
          onChangeText={setPlayerName}
          placeholder='Athlete Name'
        
        />
      
      <View style = {styles.textCont}>
        <Text style = {styles.text}>#</Text>
      </View>

        <TextInput style = {styles.numTextBox}
          onChangeText={setPlayerNumber}
          placeholder="Number"
        />

    </View>
      
   
        
  
      
        
      
    
    </View>
    </ScrollView>
    
    
  );
}
  
const styles = StyleSheet.create({
  horizntal:{
    flexDirection: 'row'
  },
  wholeConatiner: {
    height:'100%',
    width: '100%',
    
    backgroundColor: '#fff'

  },
  container: {
  
    height:'30%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },

  buttonContainer: {
  
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingBottom: '135%',
 
  },

  imageContainer: {
    height:'50%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 

  },

  lineContainer: {
    height: '2%',
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playersContainer:{
    height:'100%',
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  textBox: {
    backgroundColor: '#f5f5f5',
    width: '75%',
    height: 40,
    marginLeft: '5%'
    
    

  
    
   
  },
  numTextBox: {
    backgroundColor: '#f5f5f5',
    width: '10%',
    height: 40,
    
    
    

  
    
   
  },
  text: { 
    fontSize:20,
    color: 'black'
    
  },
  textCont: { 
    alignItems: 'center',
    padding: 4,
    height: 40,
    width: '5%'
    
  }
  


});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import MyTextInput from '../App/components/MyTextInput';
import {Player, Team} from '../App/components/Player';
import React, { useState } from 'react';


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





    <View style = {styles.wholeConatiner}>
      
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
    <View>
      <TextInput
        onChangeText={setPlayerName}
        value={playerName}
        placeholder="Player Name"
      />
      <TextInput
        onChangeText={setPlayerNumber}
        value={playerNumber}
        placeholder="Player Number"
      />
      
      <Button title="Create Team" onPress={handleCreateTeam} />
      {team && (
        <Text>{JSON.stringify(team)}</Text>
      )}
    </View>
    </View>
    </View>
    
    
  );
}
  
const styles = StyleSheet.create({
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
  }



});
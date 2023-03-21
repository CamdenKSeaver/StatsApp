import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { CurrentRenderContext, StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import MyTextInput from '../App/components/MyTextInput';
import {Player, Team} from '../App/components/Player';
import React, { useState } from 'react';
import PlayerName from '../App/components/PlayerName';


export default function CreateTeam({ navigation, route }) {

  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState({ name: '', players: [] });
  const [player1Number, setPlayer1Number] = useState('');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Number, setPlayer2Number] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player3Number, setPlayer3Number] = useState('');
  const [player3Name, setPlayer3Name] = useState('');
  const [player4Number, setPlayer4Number] = useState('');
  const [player4Name, setPlayer4Name] = useState('');
  const [player5Number, setPlayer5Number] = useState('');
  const [player5Name, setPlayer5Name] = useState('');
  const [player6Number, setPlayer6Number] = useState('');
  const [player6Name, setPlayer6Name] = useState('');
  const [player7Name, setPlayer7Name] = useState('');
  const [player7Number, setPlayer7Number] = useState('');
  const [player8Name, setPlayer8Name] = useState('');
  const [player8Number, setPlayer8Number] = useState('');
  const [player9Name, setPlayer9Name] = useState('');
  const [player9Number, setPlayer9Number] = useState('');
  const [player10Number, setPlayer10Number] = useState('');
  const [player10Name, setPlayer10Name] = useState('');
  const [player11Number, setPlayer11Number] = useState('');
  const [player11Name, setPlayer11Name] = useState('');
  const [player12Name, setPlayer12Name] = useState('');
  const [player12Number, setPlayer12Number] = useState('');
  const [player13Name, setPlayer13Name] = useState('');
  const [player13Number, setPlayer13Number] = useState('');
  const [player14Name, setPlayer14Name] = useState('');
  const [player14Number, setPlayer14Number] = useState('');
  const [player15Name, setPlayer15Name] = useState('');
  const [player15Number, setPlayer15Number] = useState('');
  const [player16Name, setPlayer16Name] = useState('');
  const [player16Number, setPlayer16Number] = useState('');
  const [player17Name, setPlayer17Name] = useState('');
  const [player17Number, setPlayer17Number] = useState('');
  const [player18Name, setPlayer18Name] = useState('');
  const [player18Number, setPlayer18Number] = useState('');

  const handleAddPlayers = () => {
    const player1 = { number: player1Number, name: player1Name };
    const player2 = { number: player2Number, name: player2Name };
    const player3 = { number: player3Number, name: player3Name };
    const player4 = { number: player4Number, name: player4Name };
    const player5 = { number: player5Number, name: player5Name };
    const player6 = { number: player6Number, name: player6Name };
    const player7 = { number: player7Number, name: player7Name };
    const player8 = { number: player8Number, name: player8Name };
    const player9 = { number: playe9Number, name: player9ame };
    const player10 = { number: player10Number, name: player10Name };
    const player11= { number: player11Number, name: player11Name };
    const player12 = { number: player12Number, name: player12Name };
    const player13 = { number: player13Number, name: player13Name };
    const player14= { number: player14Number, name: player14Name };
    const player15= { number: player15Number, name: player15Name };
    const player16 = { number: player16Number, name: player16Name };
    const player17 = { number: player17Number, name: player17Name };
    const player18 = { number: player18Number, name: player18Name };
    setPlayers([...players, player1, player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18]);
    setTeam({ ...team, players: [...team.players, player1, player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18] });
    setPlayer1Number('');
    setPlayer1Name('');
    setPlayer2Number('');
    setPlayer2Name('');


  };
  
  return (





    <ScrollView style = {styles.wholeConatiner}>
      
    <View style={styles.container}>
     
        <Image
          style= {{width: '80%', height:'25%',marginTop: '8%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
  
      <View style={[styles.lineContainer, {marginTop: '6%'}]}>
        </View>
      <View style={[styles.buttonContainer,{marginTop: '5%'}]}>
        <MyButton 
          title='Save Team'
          width= {'40%'}
          height= {'100%'}
          onPress={handleAddPlayers}
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
    <TextInput style = {[styles.textBox,{marginLeft: '20%', width: '60%'}]}
      placeholder = 'Team Name'
      value={team.name}
      onChangeText={(text) => setTeam({ ...team, name: text })}
    />
     

    <View style = {[styles.horizntal, {marginTop: 30}]}>
      
        <TextInput style = {styles.textBox}
          placeholder='Athlete Name'
          value={player1Name}
        onChangeText={(text) => setPlayer1Name(text)}
        />
      
      <View style = {styles.textCont}>
        <Text style = {styles.text}>#</Text>
      </View>

        <TextInput style = {styles.numTextBox}
          placeholder="Num"
          value={player1Number}
          onChangeText={(text) => setPlayer1Number(text)}
        />

    </View>
    
    <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          ovalue={player2Name}
          onChangeText={(text) => setPlayer2Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player2Number}
        onChangeText={(text) => setPlayer2Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player3Name}
        onChangeText={(text) => setPlayer3Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player3Number}
        onChangeText={(text) => setPlayer3Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player4Name}
        onChangeText={(text) => setPlayer4Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player4Number}
        onChangeText={(text) => setPlayer4Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player5Name}
        onChangeText={(text) => setPlayer5Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player5Number}
        onChangeText={(text) => setPlayer5Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player6Name}
        onChangeText={(text) => setPlayer6Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player6Number}
        onChangeText={(text) => setPlayer6Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player7Name}
        onChangeText={(text) => setPlayer7Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player7Number}
        onChangeText={(text) => setPlayer7Number(text)}
      />

  </View>

  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player8Name}
        onChangeText={(text) => setPlayer8Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num" 
        value={player8Number}
        onChangeText={(text) => setPlayer8Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player9Name}
        onChangeText={(text) => setPlayer9Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player9Number}
        onChangeText={(text) => setPlayer9Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player10Name}
        onChangeText={(text) => setPlayer10Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player10Number}
        onChangeText={(text) => setPlayer10Number(text)}
      />

  </View>
  
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player11Name}
        onChangeText={(text) => setPlayer11Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player11Number}
        onChangeText={(text) => setPlayer11Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player12Name}
        onChangeText={(text) => setPlayer12Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player12Number}
        onChangeText={(text) => setPlayer12Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player13Name}
        onChangeText={(text) => setPlayer13Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player13Number}
        onChangeText={(text) => setPlayer13Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player14Name}
        onChangeText={(text) => setPlayer14Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player14Number}
        onChangeText={(text) => setPlayer14Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player15Name}
        onChangeText={(text) => setPlayer15Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player15Number}
        onChangeText={(text) => setPlayer15Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player16Name}
        onChangeText={(text) => setPlayer16Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player16Number}
        onChangeText={(text) => setPlayer16Number(text)}
      />

  </View>

  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player17Name}
        onChangeText={(text) => setPlayer17Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player17Number}
        onChangeText={(text) => setPlayer17Number(text)}
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
        value={player18Name}
        onChangeText={(text) => setPlayer18Name(text)}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
        value={player18Number}
        onChangeText={(text) => setPlayer18Number(text)}
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
    height:5000,
    width: '100%',
    
    backgroundColor: '#fff'

  },
  container: {
  
    height:366,
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
    
    flexDirection: 'column',
  },
  textBox: {
    backgroundColor: '#f5f5f5',
    width: '70%',
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
    color: 'black',
    
    
  },
  textCont: { 
    alignItems: 'center',
    padding: 4,
    height: 40,
    width: '10%'
    
  }
  


});
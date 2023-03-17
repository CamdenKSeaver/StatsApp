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
  const [team, setTeam] = useState({});

const [player1, setPlayer1] = useState("");
const [player2, setPlayer2] = useState("");
const [player3, setPlayer3] = useState("");
const [player4, setPlayer4] = useState("");
const [player5, setPlayer5] = useState("");
const [player6, setPlayer6] = useState("");
const [player7, setPlayer7] = useState("");
const [player8, setPlayer8] = useState("");
const [player9, setPlayer9] = useState("");
const [player10, setPlayer10] = useState("");



const createTeam = () => {
  const newTeam = {
    player1: { name: player1 },
    player2: { name: player2 },
    player3: { name: player3 },
    player4: { name: player4 },
    player5: { name: player5 },
    player6: { name: player6 },
    player7: { name: player7 },
    player8: { name: player8 },
    player9: { name: player1 },
    player10: { name: player10 },
   
  };
  setTeam(newTeam);
};



  
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
          onPress={createTeam}
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
          placeholder='Athlete Name'
            onChangeText = {setPlayer1}
        />
      
      <View style = {styles.textCont}>
        <Text style = {styles.text}>#</Text>
      </View>

        <TextInput style = {styles.numTextBox}
          placeholder="Num"
        />

    </View>
    
    <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer2}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer3}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer4}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer5}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer6}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer7}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>

  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer8}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer9}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer10}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer2}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer3}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer4}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer5}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer6}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer7}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>

  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer8}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer9}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
      />

  </View>
  <View style = {[styles.horizntal, {marginTop: 30}]}>
      
      <TextInput style = {styles.textBox}
        placeholder='Athlete Name'
          onChangeText = {setPlayer10}
      />
    
    <View style = {styles.textCont}>
      <Text style = {styles.text}>#</Text>
    </View>

      <TextInput style = {styles.numTextBox}
        placeholder="Num"
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
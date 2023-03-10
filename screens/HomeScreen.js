import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image, TextInput } from 'react-native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import React, { useState } from 'react';
import Player from '../App/components/Player';


export default function HomeScreen({ navigation }) {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState([]);

  const handleCreatePlayer = () => {
    const newPlayer = new Player(playerName, 0);
    setPlayers([...players, newPlayer]);
    setPlayerName('');
  }
  return (
    <View style={styles.container}>
    
        <Image
          style= {{width: '85%', height:'8%', marginTop: '20%'}}
          source={require('../App/assets/images/logo.png')} 
        
        />
    
      <MyButton 
        title="Create Team"
        onPress={() => navigation.navigate("Create Team")}
        width ={'60%'}
        height ={'9%'}
        marginTop = {'30%'}
       
        />
     
      <MyButton 
        title="New Game"
        onPress={() => navigation.navigate("New Game")}
        width ={'60%'}
        height ={'9%'}
        marginTop = {'10%'}

      />
      <MyButton 
        title="View Games"
        onPress={() => navigation.navigate("View Game")}
        width ={'60%'}
        height ={'9%'}
        marginTop = {'10%'}

      />
          <View>
      <TextInput
        value={playerName}
        onChangeText={setPlayerName}
        placeholder="Enter player name"
      />
      <Button
        title="Create Player"
        onPress={handleCreatePlayer}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});
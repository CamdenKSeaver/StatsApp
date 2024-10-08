import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity,ToastAndroid } from 'react-native';
import React, { useEffect,useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import { SafeAreaView } from 'react-native';
import Table from '../App/components/Table';
import { AntDesign } from '@expo/vector-icons';
import StatBox from '../App/components/StatBox';
import { Player } from '../App/components/Player';
import { db } from '../App/config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import GameDisplay from './GameDisplay';


export default function TakeStats({ navigation, route }) {
  const [opponentTeamName, setOpponentTeamName] = useState('');
  const [indexes, setIndexes] = useState([0, 1, 2, 3, 4, 5]);
  const [stats, setStats] = useState(['atk','kill','err','ast', 'dig','blk', 'one','two','three'])
  const { teamName, players } = route.params;
  const onPress = (id) => {
  
        players[Math.floor(id / 9)][stats[((id) % 9)]]++
  }
  const onLongPress = (id) => {
    players[Math.floor(id / 9)][stats[((id) % 9)]]--

  }
 
  const saveGame = async () => {
    try {
     
      ToastAndroid.show('Saving...', ToastAndroid.SHORT);
      
      const docRef = await addDoc(collection(db, 'games'), {
        name: teamName + ' vs ' + opponentTeamName,
        players: players,
      });
      console.log(players);
      navigation.navigate('Game Display',{ players: players});
    
   
    } catch (error) {
      console.log('Error saving game: Make sure Opponent team name is logged', error);
      ToastAndroid.show('Error saving game: Make sure Opponent team name is logged', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
var width = 64.5;
  return (
    <ScrollView>
      <View style={styles.column}>
        <Text style={styles.top1}>{teamName}</Text>
        <Text style={styles.top2}>Atk</Text>
        <Text style={styles.top2}>Kill</Text>
        <Text style={styles.top2}>Err</Text>
        <Text style={styles.top2}>Ast</Text>
        <Text style={styles.top2}>Dig</Text>
        <Text style={styles.top2}>Blk</Text>
        <Text style={styles.top2}> 1</Text>
        <Text style={styles.top2}> 2</Text>
        <Text style={styles.top2}> 3</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.playerCont, { marginTop: '.3%' }]}>
          <View style ={styles.statRow}>
          <Text style = { styles.nameSize}>{players[indexes[0]].name}</Text>
            <StatBox
            id={0}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(0)}
                onLongPress={() => onLongPress(0)}
            />
            <StatBox
            id={1}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(1)}onLongPress={() => onLongPress(1)}
            />
            <StatBox
            id={2}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(2)}onLongPress={() => onLongPress(2)}
            />
            <StatBox
            id={3}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(3)}onLongPress={() => onLongPress(3)}
            />
            <StatBox
            id={4}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(4)}onLongPress={() => onLongPress(4)}
            />
            <StatBox
            id={5}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(5)}onLongPress={() => onLongPress(5)}
            />
            <StatBox
            id={6}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(6)}onLongPress={() => onLongPress(6)}
            />
            <StatBox
            id={7}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(7)}onLongPress={() => onLongPress(7)}
            />
            <StatBox
            id={8}
            marginLeft={0}
                width ={width}
                height ={50}
                onPress={() => onPress(8)}onLongPress={() => onLongPress(8)}
            />

          </View>


          <View style ={styles.statRow}>
          <Text style = {styles.nameSize}>{players[indexes[1]].name}</Text>
          <StatBox
            id={9}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(9)}onLongPress={() => onLongPress(9)}
            />
            <StatBox
            id={10}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(10)}onLongPress={() => onLongPress(10)}
            />
            <StatBox
            id={11}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(11)}onLongPress={() => onLongPress(11)}
            />
            <StatBox
            id={12}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(12)}onLongPress={() => onLongPress(12)}
            />
            <StatBox
            id={13}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(13)}onLongPress={() => onLongPress(13)}
            />
            <StatBox
            id={14}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(14)}onLongPress={() => onLongPress(14)}
            />
            <StatBox
            id={15}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(15)}onLongPress={() => onLongPress(15)}
            />
            <StatBox
            id={16}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(16)}onLongPress={() => onLongPress(16)}
            />
            <StatBox
            id={17}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(17)}onLongPress={() => onLongPress(17)}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style ={styles.nameSize}>{players[indexes[2]].name}</Text>
          <StatBox
            id={18}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(18)}onLongPress={() => onLongPress(18)}
            />
            <StatBox
            id={19}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(19)}onLongPress={() => onLongPress(19)}
            />
            <StatBox
            id={20}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(20)}onLongPress={() => onLongPress(20)}
            />
            <StatBox
            id={21}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(21)}onLongPress={() => onLongPress(21)}
            />
            <StatBox
            id={22}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(22)}onLongPress={() => onLongPress(22)}
            />
            <StatBox
            id={23}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(23)}onLongPress={() => onLongPress(23)}
            />
            <StatBox
            id={24}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(24)}onLongPress={() => onLongPress(24)}
            />
            <StatBox
            id={25}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(25)}onLongPress={() => onLongPress(25)}
            />
            <StatBox
            id={26}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(26)}onLongPress={() => onLongPress(26)}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style={styles.nameSize}>{players[indexes[3]].name}</Text>
          <StatBox
            id={27}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(27)}onLongPress={() => onLongPress(27)}
            />
            <StatBox
            id={28}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(28)}onLongPress={() => onLongPress(28)}
            />
            <StatBox
            id={29}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(29)}onLongPress={() => onLongPress(29)}
            />
            <StatBox
            id={30}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(30)}onLongPress={() => onLongPress(30)}
            />
            <StatBox
            id={31}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(31)}onLongPress={() => onLongPress(31)}
            />
            <StatBox
            id={32}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(32)}onLongPress={() => onLongPress(32)}
            />
            <StatBox
            id={33}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(33)}onLongPress={() => onLongPress(33)}
            />
            <StatBox
            id={34}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(34)}onLongPress={() => onLongPress(34)}
            />
            <StatBox
            id={35}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(35)}onLongPress={() => onLongPress(35)}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style={styles.nameSize}>{players[indexes[4]].name}</Text>
          <StatBox
            id={36}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(36)}onLongPress={() => onLongPress(36)}
            />
            <StatBox
            id={37}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(37)}onLongPress={() => onLongPress(37)}
            />
            <StatBox
            id={38}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(38)}onLongPress={() => onLongPress(38)}
            />
            <StatBox
            id={39}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(39)}onLongPress={() => onLongPress(39)}
            />
            <StatBox
            id={40}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(40)}onLongPress={() => onLongPress(40)}
            />
            <StatBox
            id={41}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(41)}onLongPress={() => onLongPress(41)}
            />
            <StatBox
            id={42}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(42)}onLongPress={() => onLongPress(42)}
            />
            <StatBox
            id={43}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(43)}onLongPress={() => onLongPress(43)}
            />
            <StatBox
            id={44}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(44)}onLongPress={() => onLongPress(44)}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style ={styles.nameSize}>{players[indexes[5]].name}</Text>
          <StatBox
            id={45}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(45)}onLongPress={() => onLongPress(45)}
            />
            <StatBox
            id={46}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(46)}onLongPress={() => onLongPress(46)}
            />
            <StatBox
            id={47}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(47)}onLongPress={() => onLongPress(47)}
            />
            <StatBox
            id={48}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(48)}onLongPress={() => onLongPress(48)}
            />
            <StatBox
            id={49}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(49)}onLongPress={() => onLongPress(49)}
            />
            <StatBox
            id={50}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(50)}onLongPress={() => onLongPress(50)}
            />
            <StatBox
            id={51}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(51)}onLongPress={() => onLongPress(51)}
            />
            <StatBox
            id={52}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(52)}onLongPress={() => onLongPress(52)}
            />
            <StatBox
            id={53}
            marginLeft={0}
                width ={width}
                height ={50} onPress={() => onPress(53)}onLongPress={() => onLongPress(53)}
            />
          </View>
  
        </View>
     
      </View>

      <View style={styles.height} />
      <View style={[styles.saveContainer, { marginTop: -190, paddingBottom: 60 }]}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opponent Team Name"
            value={opponentTeamName}
            onChangeText={setOpponentTeamName}
          />
        </View>
        <TouchableOpacity style={styles.saveIcon}>
          <AntDesign name="save" size={24} color="black" onPress={saveGame}/>
        

  </TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 500,
    
  },
  nameSize:{
      width: 123,
  },
  saveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  saveIcon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  backIcon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  playerCont: { 
    height: '61%',
    marginLeft: '2%',
    width: '16.9%',
    
    
  
    flexDirection: 'column',
   
    justifyContent: 'space-around'
  },
  inputContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  column: {
    flexDirection: 'row',
    height: '10%',
    marginTop: 20,
   alignItems: 'flex-start'
    

   
    
  },

  statRow: {
    flexDirection: 'row',
    height: 20,
    alignItems:'center',
    width:'100%'

  },
  top1: {
    marginLeft: '2%',
    width: '20%'
  },
  top2: {
    width: '9%',
 
   
    
  },
  line: {
    backgroundColor: '#000000',
    height: 2,
    marginTop: '1%'
    
    
  },
  blank: {
      padding:.5,
  }
 


});
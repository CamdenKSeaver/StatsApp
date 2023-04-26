import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect,useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import { SafeAreaView } from 'react-native';
import Table from '../App/components/Table';
import { AntDesign } from '@expo/vector-icons';


export default function TakeStats({ navigation, route }) {
  const [opponentTeamName, setOpponentTeamName] = useState('');

  const { teamName, players } = route.params;

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

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
          <View style={[styles.line, { marginTop: '-8%' }]} />
          <Text>{players[0].name}</Text>
          <View style={[styles.line, { marginTop: '0%' }]} />
          <Text>{players[1].name}</Text>
          <View style={styles.line} />
          <Text>{players[2].name}</Text>
          <View style={styles.line} />
          <Text style={styles.blank}>{players[3].name}</Text>
          <View style={[styles.line, { marginTop: '-1%' }]} />
          <Text style={styles.blank}>{players[4].name}</Text>
          <View style={[styles.line, { marginTop: '0%' }]} />
          <Text>{players[5].name}</Text>
          <View style={[styles.line, { marginTop: '0%' }]} />
        </View>
        <Table />
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
          <AntDesign name="save" size={24} color="black" />
       

  </TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 500
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView,} from 'react-native';
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import { SafeAreaView } from 'react-native';
import Table from '../App/components/Table';

export default function TakeStats({ navigation, route }) {
    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        return () => {
          ScreenOrientation.unlockAsync();
        };
      }, []);
  return (
    <View>
      <View style = {styles.column}>
        
      <Text style = {styles.top1}>Team Name</Text>
      <Text style = {styles.top2}>Atk</Text>
      <Text style = {styles.top2}>Kill</Text>
      <Text style = {styles.top2}>Err</Text>
      <Text style = {styles.top2}>Ast</Text>
      <Text style = {styles.top2}>Dig</Text>
      <Text style = {styles.top2}>Blk</Text>
      <Text style = {styles.top2}> 1</Text>
      <Text style = {styles.top2}> 2</Text>
      <Text style = {styles.top2}> 3</Text>
      </View>
    <View style = { styles.container}>

      <View style = {styles.playerCont}>
    <Text>Player 1</Text>
    <Text>Player 2</Text>
    <Text>Player 3</Text>
    <Text>Player 4</Text>
    <Text>Player 5</Text>
    <Text>Player 6</Text>
    </View>
    
      <Table />
     
      </View>
     
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  
  
  
  },
  playerCont: {
    height: '100%',
    marginLeft: '2%',
    marginRight: '10%',
   
    flexDirection: 'column',
   
    justifyContent: 'space-around'
  },
  column: {
    flexDirection: 'row',
    height: '15%',
    alignItems: 'center',
   
    
  },
  top1: {
    marginLeft: '2%',
    width: '20%'
  },
  top2: {
    width: '9%',
 
   
    
  }


});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput,} from 'react-native';
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
   
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  playerCont: {
    height: '100%',
    flexDirection: 'column',
   
    justifyContent: 'space-around'
  },


});
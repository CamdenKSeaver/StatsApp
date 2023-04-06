import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView,} from 'react-native';
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import { SafeAreaView } from 'react-native';
import Table from '../App/components/Table';
import { ScreenStackHeaderRightView } from 'react-native-screens';

export default function TakeStats({ navigation, route }) {
    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        return () => {
          ScreenOrientation.unlockAsync();
        };
      }, []);
  return (
    <ScrollView>
      <View style = {styles.saveContainer}>

      
     

      </View>

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

      <View style = {[styles.playerCont, {marginTop: '.3%'}]}>
      <View style ={[styles.line, { marginTop:'-8%'}]}/>
    <Text>Player 1</Text>
    <View style ={[styles.line, { marginTop:'0%'}]}/>
    <Text>Player 2</Text>
    <View style ={styles.line}/>
    <Text>Player 3</Text>
    <View style ={styles.line}/>
    <Text style = {styles.blank}>Player 4</Text>
    <View style ={[styles.line, { marginTop:'-1%'}]}/>
    <Text style = {styles.blank}>Player 5</Text>
    <View style ={[styles.line, { marginTop:'0%'}]}/>
    <Text >Player 6</Text>
    <View style ={[styles.line, { marginTop:'0%'}]}/>
   
    </View>
    
      <Table />
     
      </View>
    <View style = {styles.height}>
      
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

  saveContainer:{
    height: '1%',
    width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'

  },
  playerCont: {
    height: '61%',
    marginLeft: '2%',
    width: '16.9%',
    
    
  
    flexDirection: 'column',
   
    justifyContent: 'space-around'
  },
  column: {
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
   
    
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
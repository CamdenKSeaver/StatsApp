import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image, TextInput } from 'react-native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import React, { useState,  useEffect } from 'react';
import Player from '../App/components/Player';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function HomeScreen({ navigation }) {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
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
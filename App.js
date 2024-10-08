import HomeScreen from "./screens/HomeScreen";
import CreateTeam from "./screens/CreateTeam";
import NewGame from "./screens/NewGame";
import ViewGame from "./screens/ViewGame";
import SelectPlayers from "./screens/SelectPlayers"
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Player from "./App/components/Player";
import { useState } from 'react';
import TakeStats from "./screens/TakeStats"
import { ReactNativeFirebaseApp } from '@react-native-firebase/app';
import GameDisplay from "./screens/GameDisplay";





const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
     
        <Stack.Screen 
          name="Create Team"
          component={CreateTeam}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="New Game"
          component={NewGame}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="View Game"
          component={ViewGame}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Take Stats"
          component={TakeStats}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Select Players"
          component={SelectPlayers}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Game Display"
          component={GameDisplay}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

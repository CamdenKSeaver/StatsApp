import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Player {
  name;
  number;

   
    
   
   constructor(name, number) {
    
    this.playername = name;
    this.number = number;
    console.log('construictin object')
    
    
    
  }
}

class Team {
  constructor(players) {
    this.teamname = teamname;
    this.players = players;
    
  }

  get teamname(){
    return this.teamname
  }
}

export { Player, Team };

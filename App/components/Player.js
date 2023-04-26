import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Player {
  constructor(name, number,atk,kill,err,ast,dig,blk,one,two,three) {
    this.name = name;
    this.number = number;
    atk =0;
    kill=0;
    err=0;
    ast=0;
    dig=0;
    blk=0;
    one=0;
    two=0;
    three=0;

    
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

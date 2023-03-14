import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Player {
  constructor(name, number) {
    this.name = name;
    this.number = number;
    
  }
}

class Team {
  constructor(players) {
    this.players = players;
  }
}

export { Player, Team };

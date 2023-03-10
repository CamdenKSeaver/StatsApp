import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  updateScore(points) {
    this.score += points;
  }
}

export default Player;
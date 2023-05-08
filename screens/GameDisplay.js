import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity,ToastAndroid,FlatList } from 'react-native';
const GameDisplay = ({ players }) => {
    return (
      <View>
        <Text>Player Stats</Text>
        <FlatList
          data={players}
          keyExtractor={(player) => player.number}
          renderItem={({ item }) => (
            <View>
              <Text>Number: {item.number}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Attack: {item.atk}</Text>
              <Text>Kills: {item.kill}</Text>
              <Text>Errors: {item.err}</Text>
              <Text>Assists: {item.ast}</Text>
              <Text>Digs: {item.dig}</Text>
              <Text>Blocks: {item.blk}</Text>
              <Text>1: {item.one}</Text>
              <Text>2: {item.two}</Text>
              <Text>3: {item.three}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  

export default GameDisplay;
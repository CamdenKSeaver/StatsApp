import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../App/config/firebase';
import colors from '../App/config/colors';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const SelectPlayers = ({ route }) => {
  const { teamId, teamName } = route.params;
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const playersQuery = query(collection(db, 'teams'), where('name', '==', teamName));
    const unsubscribe = onSnapshot(playersQuery, (snapshot) => {
      const team = snapshot.docs[0]?.data();
      const playersData = team?.players || [];
      setPlayers(playersData);
    });
    return unsubscribe;
  }, [teamName]);

  const handleConfirm = () => {
    // Perform any desired action with the selected players
    console.log('Selected Players:', selectedPlayers);
  };

  const renderPlayerItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePlayerPress(item)}>
        <View style={styles.playerItem}>
          <Text style={styles.playerName}>{item.name}</Text>
          <RadioButton
            value={item.name}
            status={selectedPlayers.includes(item.name) ? 'checked' : 'unchecked'}
            onPress={() => handlePlayerPress(item)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const handlePlayerPress = (player) => {
    const selected = selectedPlayers.includes(player.name);
    if (selected) {
      setSelectedPlayers(selectedPlayers.filter((name) => name !== player.name));
    } else {
      setSelectedPlayers([...selectedPlayers, player.name]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Players from {teamName}</Text>
      <FlatList
        data={players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.number.toString()}
        style={styles.playersList}
      />
      <TouchableOpacity style={[styles.confirmButton, {marginBottom:50}]} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryBlue,
    marginBottom: 20,
  },
  playersList: {
    flex: 1,
    width: '100%',
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGray,

  },
  confirmButton: {
    backgroundColor: colors.primaryBlue,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SelectPlayers;

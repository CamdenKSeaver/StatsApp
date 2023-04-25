import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../App/config/firebase';
import colors from '../App/config/colors';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const SelectPlayers = ({ route }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const { teamId } = route.params;

  useEffect(() => {
    const playersQuery = query(collection(db, 'players'), where('teamId', '==', teamId));
    const unsubscribe = onSnapshot(playersQuery, (snapshot) => {
      const playersData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPlayers(playersData);
    });
    return unsubscribe;
  }, [teamId]);

  const navigation = useNavigation();

  const handlePlayerPress = (player) => {
    setSelectedPlayerId(player.id);
  };

  const handleConfirmPress = () => {
    if (selectedPlayerId) {
      const selectedPlayer = players.find((player) => player.id === selectedPlayerId);
      console.log('Selected Player:', selectedPlayer.name);
      navigation.navigate('Confirm Selection', { selectedPlayer });
    } else {
      Alert.alert('Please select a player.');
    }
  };

  const renderPlayerItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePlayerPress(item)}>
        <View style={styles.playerItem}>
          <Text style={styles.playerName}>{item.name}</Text>
          <RadioButton selected={selectedPlayerId === item.id} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Player</Text>
      <FlatList
        data={players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id}
        style={styles.playersList}
      />
      <TouchableOpacity onPress={handleConfirmPress}>
        <View style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </View>
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

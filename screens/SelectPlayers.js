import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../App/config/firebase';
import colors from '../App/config/colors';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper'; 




const SelectPlayers = ({ route }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState([]); // Store an array of selected player IDs

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
    const isSelected = selectedPlayerIds.includes(player.id);

    if (isSelected) {
      setSelectedPlayerIds(selectedPlayerIds.filter((id) => id !== player.id));
    } else {
      setSelectedPlayerIds([...selectedPlayerIds, player.id]);
    }
  };

  const handleConfirmPress = () => {
    if (selectedPlayerIds.length > 0) {
      const selectedPlayers = players.filter((player) => selectedPlayerIds.includes(player.id));
      console.log('Selected Players:', selectedPlayers.map((player) => player.name));
      navigation.navigate('Confirm Selection', { selectedPlayers });
    } else {
      Alert.alert('Please select at least one player.');
    }
  };

  const renderPlayerItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePlayerPress(item)}>
        <View style={styles.playerItem}>
          <Text style={styles.playerName}>{item.name}</Text>
          <Checkbox
            status={selectedPlayerIds.includes(item.id) ? 'checked' : 'unchecked'} // Check the status based on selection
            onPress={() => handlePlayerPress(item)}
            color={colors.primaryBlue}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Players</Text>
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

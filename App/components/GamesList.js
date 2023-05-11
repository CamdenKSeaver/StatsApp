import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gamesQuery = query(collection(db, 'games'));
    const unsubscribe = onSnapshot(gamesQuery, (snapshot) => {
      const gamesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGames(gamesData);
    });
    return unsubscribe;
  }, []);

  const navigation = useNavigation();

  const renderGameItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleGamePress(item)}>
        <View style={styles.gameItem}>
          <Text style={styles.gameName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleGamePress = (game) => {
    navigation.navigate('Game Display', {
      gameId: game.id,
      gameName: game.name,
    });
  };

  return (
    <FlatList
      data={games}
      renderItem={renderGameItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = {
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#00000',
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryBlue,
  },
};

export default GameList;

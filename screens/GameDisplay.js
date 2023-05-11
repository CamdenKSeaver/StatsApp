import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../App/config/firebase';
import MyButton from '../App/components/MyButton';
import colors from '../App/config/colors';
import { useNavigation } from '@react-navigation/native';

const GameDisplay = ({ route }) => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      const gameId = route.params?.gameId;
      const gameDocRef = doc(db, 'games', gameId);
      const gameSnapshot = await getDoc(gameDocRef);
      if (gameSnapshot.exists()) {
        setGameData(gameSnapshot.data());
      }
    };

    fetchGameData();
  }, [route.params?.gameId]);

  const navigation = useNavigation();

  if (!gameData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../App/assets/images/logo.png')} />
        <MyButton
          title='Back'
          width='90%'
          height={50}
          marginTop='6%'
          onPress={() => {
            navigation.navigate('View Game');
          }}
        />
        <Text style={styles.gameName}>{gameData.name}</Text>
        <FlatList
          style={styles.flatlist}
          data={gameData.players}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <View style={styles.playerContainer}>
              <Text style={styles.playerName}>Player Name: {item.name}</Text>
              <Text>Number: {item.number}</Text>
              <Text>Atk: {item.atk}</Text>
              <Text>Kill: {item.kill}</Text>
              <Text>Err: {item.err}</Text>
              <Text>Ast: {item.ast}</Text>
              <Text>Dig: {item.dig}</Text>
              <Text>Blk: {item.blk}</Text>
              <Text>1: {item.one}</Text>
              <Text>2: {item.two}</Text>
              <Text>3: {item.three}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logo: {
    width: '90%',
    height: 70,
    marginTop: 30,
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  flatlist: {
    width: '100%',
    height: '80%',
  },
  playerContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.primaryBlue,
  },
  playerName: {
    fontWeight: 'bold',
  },
});

export default GameDisplay;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  

  useEffect(() => {
    const teamsQuery = query(collection(db, 'teams'));
    const unsubscribe = onSnapshot(teamsQuery, (snapshot) => {
      const teamsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTeams(teamsData);
    });
    return unsubscribe;
  }, []);

  const navigation = useNavigation();

  const renderTeamItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleTeamPress(item)}>
        <View style={styles.teamItem}>
          <Text style={styles.teamName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleTeamPress = (team) => {
    console.log('Team selected ', team.name);
    navigation.navigate('Take Stats', { 
      teamId: team.id, 
      teamName: team.name, 
      players: team.players 
    });
  };
  

  return (
    <FlatList
      data={teams}
      renderItem={renderTeamItem}
      keyExtractor={(item) => item.id}
      style={styles.teamsList}
    />
  );
};

const styles = {
  teamsList: {
    flex: 1,
  },
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#00000',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryBlue
  },
};

export default TeamsList;

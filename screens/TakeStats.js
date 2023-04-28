import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect,useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import { SafeAreaView } from 'react-native';
import Table from '../App/components/Table';
import { AntDesign } from '@expo/vector-icons';
import StatBox from '../App/components/StatBox';


export default function TakeStats({ navigation, route }) {
  const [opponentTeamName, setOpponentTeamName] = useState('');

  const { teamName, players } = route.params;
  
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
var width = 64.5;
  return (
    <ScrollView>
      <View style={styles.column}>
        <Text style={styles.top1}>{teamName}</Text>
        <Text style={styles.top2}>Atk</Text>
        <Text style={styles.top2}>Kill</Text>
        <Text style={styles.top2}>Err</Text>
        <Text style={styles.top2}>Ast</Text>
        <Text style={styles.top2}>Dig</Text>
        <Text style={styles.top2}>Blk</Text>
        <Text style={styles.top2}> 1</Text>
        <Text style={styles.top2}> 2</Text>
        <Text style={styles.top2}> 3</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.playerCont, { marginTop: '.3%' }]}>
          <View style ={styles.statRow}>
          <Text style = { styles.nameSize}>{players[0].name}</Text>
            <StatBox
            id={0}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={1}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={2}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={3}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={4}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={5}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={6}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={7}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={8}
            marginLeft={0}
                width ={width}
                height ={50}
            />

          </View>


          <View style ={styles.statRow}>
          <Text style = {styles.nameSize}>{players[1].name}</Text>
          <StatBox
            id={9}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={10}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={11}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={12}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={13}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={14}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={15}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={16}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={17}
            marginLeft={0}
                width ={width}
                height ={50}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style ={styles.nameSize}>{players[2].name}</Text>
          <StatBox
            id={18}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={19}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={20}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={21}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={22}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={23}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={24}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={25}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={26}
            marginLeft={0}
                width ={width}
                height ={50}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style={styles.nameSize}>{players[3].name}</Text>
          <StatBox
            id={27}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={28}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={29}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={30}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={31}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={32}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={33}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={34}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={35}
            marginLeft={0}
                width ={width}
                height ={50}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style={styles.nameSize}>{players[4].name}</Text>
          <StatBox
            id={36}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={37}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={38}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={39}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={40}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={41}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={42}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={43}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={44}
            marginLeft={0}
                width ={width}
                height ={50}
            />
          </View>


          <View style ={styles.statRow}>
          <Text style ={styles.nameSize}>{players[5].name}</Text>
          <StatBox
            id={45}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={46}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={47}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={48}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={49}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={50}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={51}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={52}
            marginLeft={0}
                width ={width}
                height ={50}
            />
            <StatBox
            id={53}
            marginLeft={0}
                width ={width}
                height ={50}
            />
          </View>
  
        </View>
     
      </View>

      <View style={styles.height} />
      <View style={[styles.saveContainer, { marginTop: -190, paddingBottom: 60 }]}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opponent Team Name"
            value={opponentTeamName}
            onChangeText={setOpponentTeamName}
          />
        </View>
        <TouchableOpacity style={styles.saveIcon}>
          <AntDesign name="save" size={24} color="black" />
       

  </TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 500,
    
  },
  nameSize:{
      width: 123,
  },
  saveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  saveIcon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  backIcon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  playerCont: { 
    height: '61%',
    marginLeft: '2%',
    width: '16.9%',
    
    
  
    flexDirection: 'column',
   
    justifyContent: 'space-around'
  },
  inputContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  column: {
    flexDirection: 'row',
    height: '10%',
    marginTop: 20,
   alignItems: 'flex-start'
    

   
    
  },

  statRow: {
    flexDirection: 'row',
    height: 20,
    alignItems:'center',
    width:'100%'

  },
  top1: {
    marginLeft: '2%',
    width: '20%'
  },
  top2: {
    width: '9%',
 
   
    
  },
  line: {
    backgroundColor: '#000000',
    height: 2,
    marginTop: '1%'
    
    
  },
  blank: {
      padding:.5,
  }
 


});
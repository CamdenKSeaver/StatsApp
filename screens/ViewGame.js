import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput,ScrollView } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import GameList from '../App/components/GamesList';
export default function ViewGame({ navigation, route }) {
  return (
  <ScrollView>

 
    <View style={styles.container}>
      
      <Image
          style= {{width: '90%', height:'3%',marginTop: -100}}
          source={require('../App/assets/images/logo.png')} 
          
        />
           
    <View style={[styles.lineContainer, {marginTop: '6%'}]}>
    </View>


      <View style={styles.buttonContainer}>
        <MyButton 
          title='New Game'
          width= {'40%'}
          height= {75}
          marginTop={'6%'}
          onPress={() => {
            navigation.navigate("New Game")}}
        />
       
        <MyButton 
          title='Back'
          width= {'40%'}
          height= {75}
          marginLeft= {'3.33%'}
          onPress={() => {
            navigation.navigate("Home")}}
            marginTop={'6%'}
        />
      </View>
     
    <View style={styles.flatlist}>
        <GameList />
      </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 2000,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  buttonContainer: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', 
    
 
  },flatlist:{
    width: '100%',
    height: '80%',
    
  },

  imageContainer: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 

  },

  lineContainer: {
    height: '.3%',
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  space: {
    width: 20, 
  },

  teamContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
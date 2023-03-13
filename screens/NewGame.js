import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'

export default function ViewGame({ navigation, route }) {
  return (
    <View style={styles.container}>
     
        <Image
          style= {{width: '90%', height:'9%',marginTop: '10%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
  
      <View style={[styles.lineContainer, {marginTop: '6%'}]}>
        </View>
      
        <MyButton 
          marginTop=' 10%'
          title='Select Team'
          width= {'60%'}
          height= {'7%'}
          
        />
        <MyButton 
          marginTop=' 6%'
          title='Create Team'
          width= {'60%'}
          height= {'7%'}
          onPress={() => {
            navigation.navigate("Create Team")}}
          
        />
     
       
        <MyButton 
          title='Back'
          width= {'60%'}
          height= {'7%'}
          marginTop=' 6%'
          onPress={() => {
            navigation.navigate("Home")}}
        />
      
      <View style={styles.teamContainer}>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },


  

  lineContainer: {
    height: '.7%',
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
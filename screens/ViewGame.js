import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'

export default function ViewGame({ navigation, route }) {
  return (
    <View style={styles.container}>
      
      <Image
          style= {{width: '90%', height:'8%',marginTop: '10%'}}
          source={require('../App/assets/images/logo.png')} 
          
        />
           
           <View style={[styles.lineContainer, {marginTop: '6%'}]}>
        </View>
      <View style={styles.buttonContainer}>
        <MyButton 
          title='Delete Games'
          width= {'40%'}
          height= {'50%'}
          
        />
       
        <MyButton 
          title='Back'
          width= {'40%'}
          height= {'50%'}
          marginLeft= {'3.33%'}
          onPress={() => {
            navigation.navigate("Home")}}
        />
      </View>
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
    justifyContent: 'center', 
  },

  buttonContainer: {
    flex: .75,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingBottom: '135%',
 
  },

  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 

  },

  lineContainer: {
    height: 5,
    width: 330,
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
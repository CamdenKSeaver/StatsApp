import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'
import MyTextInput from '../App/components/MyTextInput';

export default function CreateTeam({ navigation, route }) {

  
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer,{width: '100%', height: '100%'}]}>
        <Image
      style= {{width: '90%', height:'50%',marginTop: '4%'}}
          source={require('../App/assets/images/logo.png')} 
            />
            </View>
      <View style={styles.lineContainer}>
        </View>
      <View style={styles.buttonContainer}>
        <MyButton 
          title='Save Team'
          width= {'40%'}
          height= {'50%'}
          onPress={() => navigation.push("Home")}
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
      <MyTextInput>
        
      </MyTextInput>

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
    flexDirection: 'column',
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },



});
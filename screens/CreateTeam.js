import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'

export default function CreateTeam({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Image
      style= {{width: 330, height:55}}
          source={require('../App/assets/images/logo.png')} 
          />
      <View style={styles.buttonContainer}>
        <MyButton 
          title='Save Team'
          onPress={() => navigation.push("Home")}
        />
        <View style={styles.space} />
        <MyButton 
          title='Back'
          onPress={() => {
            navigation.navigate("Home")}}
        />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingBottom: '100%',
  },

  space: {
    width: 20, 
  },

});
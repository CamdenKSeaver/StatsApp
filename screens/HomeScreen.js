import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image } from 'react-native';
import MyButton from '../App/components/MyButton';
import {useImage} from 'react-image'



export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Image
      style= {{width: 330, height:55}}
          source={require('../App/assets/images/logo.png')} 
          />
          </View>
      <MyButton 
        title="Create Team"
        onPress={() => navigation.navigate("Create Team")}
      />
      <MyButton 
        title="New Game"
        onPress={() => navigation.navigate("New Game")}

      />
      <MyButton 
        title="View Games"
        onPress={() => navigation.navigate("New Game")}

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
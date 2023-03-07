import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import MyButton from '../App/components/MyButton';

export default function CreateTeam({ navigation, route }) {
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    headerBackTitleVisible: false,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingBottom: '125%',
  },

  space: {
    width: 20, 
    height: 20,
  },

});
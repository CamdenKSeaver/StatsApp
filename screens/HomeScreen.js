import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import MyButton from '../App/components/MyButton';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
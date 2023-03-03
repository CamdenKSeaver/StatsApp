import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MyButton 
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      />
      <MyButton 
        title="Navigate to second screen with english"
        onPress={() => navigation.navigate("Second", { language: "english" })}
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
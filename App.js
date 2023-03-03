import HomeScreen from "./screens/HomeScreen";
import CreateTeam from "./screens/CreateTeam";
import NewGame from "./screens/NewGame";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Create Team"
          component={CreateTeam}
        />
        <Stack.Screen 
          name="New Game"
          component={NewGame}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
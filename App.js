import HomeScreen from "./App/screens/HomeScreen";
import CreateTeam from "./App/screens/CreateTeam";
import NewGame from "./App/screens/NewGame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyButton from './App/components/MyButton'

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
          name="Second"
          component={CreateTeam}
        />
        <Stack.Screen 
          name="Third"
          component={NewGame}
          //options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

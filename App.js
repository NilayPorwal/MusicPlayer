import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlaylistScreen from "./src/screens/PlaylistScreen";

const Stack = createStackNavigator();


const CreateHomeStack = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen name="Landing" component={PlaylistScreen} options={{headerShown: false}} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
        <CreateHomeStack />
      </NavigationContainer>
  );
};

export default App;

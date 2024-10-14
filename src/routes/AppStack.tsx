import * as React from 'react';
import { HomeScreen } from '../app/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}
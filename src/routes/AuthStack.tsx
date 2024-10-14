import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../app/SignInScreen';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={SignInScreen} />
      </Stack.Navigator>
  );
}
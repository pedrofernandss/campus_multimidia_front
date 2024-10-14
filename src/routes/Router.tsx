import * as React from 'react';
import { AppStack } from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';

export function Router() {
  const auth = true;
  return (
    <NavigationContainer independent={true} >
      {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';
import { Navigation } from './src/navigation/Navigation';
enableScreens();


export const App = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
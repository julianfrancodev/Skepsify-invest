import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';
import { Navigation } from './src/navigation/Navigation';
import { AuthProvider } from './src/state/context/AuthContext';
import Toast from 'react-native-toast-message';

enableScreens();


export const App = () => (
  <>
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </AuthProvider>
    <Toast />
  </>
);
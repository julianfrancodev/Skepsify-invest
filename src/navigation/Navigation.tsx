

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator();


export const Navigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Tabs" component={TabNavigation} />
  </Stack.Navigator>
  )
}


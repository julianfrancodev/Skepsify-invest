import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';
import { ProjectDetailPage } from '../components/pages/ProjectDetailPage';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={TabNavigation} />
            <Stack.Screen name='ProjectDetailPage' component={ProjectDetailPage} />
        </Stack.Navigator>
    )
}
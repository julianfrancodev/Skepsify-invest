import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';
import { ProjectDetailPage } from '../components/pages/ProjectDetailPage';
import { WelcomePage } from '../components/pages/WelcomePage';
import { LoginPage } from '../components/pages/LoginPage';
import { useAuthContext } from '../state/AuthContext';

const Stack = createNativeStackNavigator();

export const Navigation = () => {

    const { isAuthenticated } = useAuthContext();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <>
                    <Stack.Screen name="Tabs" component={TabNavigation} />
                    <Stack.Screen name='ProjectDetailPage' component={ProjectDetailPage} />
                </>

            ) : (
                <>
                    <Stack.Screen name='WelcomePage' component={WelcomePage} />
                    <Stack.Screen name='LoginPage' component={LoginPage} />
                </>
            )}

        </Stack.Navigator>
    )
}   
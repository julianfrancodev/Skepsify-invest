import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';
import { ProjectDetailPage } from '../components/pages/ProjectDetailPage';
import { WelcomePage } from '../components/pages/WelcomePage';
import { LoginPage } from '../components/pages/LoginPage';
import { useAuthContext } from '../state/context/AuthContext';
import { RegisterPage } from '../components/pages/RegisterPage';

const Stack = createNativeStackNavigator();

export const Navigation = () => {

    const { isAuthenticated, validateToken } = useAuthContext();
    useEffect(() => {
        validateToken();
    }, []);
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
                    <Stack.Screen name='registerPage' component={RegisterPage} />
                </>
            )}

        </Stack.Navigator>
    )
}   
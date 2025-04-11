import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginInputItems } from '../organisms/loginItemsListOrganism/LoginInputItems'
import { ScrollView } from 'react-native-virtualized-view'
import { AuthHeader } from '../organisms/loginItemsListOrganism/AuthHeader'

export const LoginPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <AuthHeader title='Encuentra donde invertir.' />
                <LoginInputItems />
            </ScrollView>
        </SafeAreaView>
    )
}
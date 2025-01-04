import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginHeader } from '../organisms/loginItemsListOrganism/LoginHeader'
import { LoginInputItems } from '../organisms/loginItemsListOrganism/LoginInputItems'
import { ScrollView } from 'react-native-virtualized-view'

export const LoginPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <LoginHeader />
                <LoginInputItems />
            </ScrollView>
        </SafeAreaView>
    )
}
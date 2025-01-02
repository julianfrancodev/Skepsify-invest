import React from 'react'
import {SafeAreaView } from 'react-native'
import { LoginHeader } from '../organisms/loginItemsListOrganism/LoginHeader'
import { LoginInputItems } from '../organisms/loginItemsListOrganism/LoginInputItems'

export const LoginPage = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
           <LoginHeader/>
           <LoginInputItems/>
        </SafeAreaView>
    )
}
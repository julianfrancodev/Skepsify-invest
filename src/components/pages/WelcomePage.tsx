import React from 'react'
import {SafeAreaView } from 'react-native'
import { WelcomeMainItems } from '../organisms/welcomeItemsOrganism/WelcomeMainItems'

export const WelcomePage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <WelcomeMainItems/>
    </SafeAreaView>
  )
}
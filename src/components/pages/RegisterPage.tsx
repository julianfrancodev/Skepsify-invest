import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { AuthHeader } from '../organisms/loginItemsListOrganism/AuthHeader'
import { RegisterInputItems } from '../organisms/registerListOrganism/RegisterInputItems'

export const RegisterPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
        <AuthHeader title='Registrate para invertir.' />
        <RegisterInputItems/>
    </ScrollView>
</SafeAreaView>
  )
}
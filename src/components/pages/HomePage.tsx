import React from 'react'
import { SafeAreaView } from 'react-native'
import { HomeMainItemsList } from '../organisms/homeItemsListOrganism/HomeMainItemsList'

export const HomePage = () => {
    return (
        <SafeAreaView>
            <HomeMainItemsList />
        </SafeAreaView>
    )
}
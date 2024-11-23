import React from 'react'
import { SafeAreaView } from 'react-native'
import { HomeMainItemsList } from '../organisms/homeItemsListOrganism/HomeMainItemsList'
import { HomeGridListOptionsItems } from '../organisms/homeItemsListOrganism/HomeGridListOptionsItems'

export const HomePage = () => {
    return (
        <SafeAreaView>
            <HomeMainItemsList />
            <HomeGridListOptionsItems/>
        </SafeAreaView>
    )
}
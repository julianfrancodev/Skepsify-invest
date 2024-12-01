import React from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import { HomeMainItemsList } from '../organisms/homeItemsListOrganism/HomeMainItemsList'
import { HomeGridListOptionsItems } from '../organisms/homeItemsListOrganism/HomeGridListOptionsItems'
import { TittleSectionWithActionButton } from '../molecules/homeItemMolecules/TittleSectionWithActionButton'
import { NotificationCardItem } from '../molecules/homeItemMolecules/NotificationCardItem'

export const HomePage = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeMainItemsList />
                <HomeGridListOptionsItems />
                <TittleSectionWithActionButton />
                <NotificationCardItem />
            </ScrollView>
        </SafeAreaView>
    )
}
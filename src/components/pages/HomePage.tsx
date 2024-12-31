import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView} from 'react-native'
import { HomeMainItemsList } from '../organisms/homeItemsListOrganism/HomeMainItemsList'
import { HomeGridListOptionsItems } from '../organisms/homeItemsListOrganism/HomeGridListOptionsItems'
import { TittleSectionWithActionButton } from '../molecules/homeItemMolecules/TittleSectionWithActionButton'
import { NotificationCardItem } from '../molecules/homeItemMolecules/NotificationCardItem'

export const HomePage = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <HomeMainItemsList />
                <HomeGridListOptionsItems />
                <TittleSectionWithActionButton />
                <NotificationCardItem />
            </ScrollView>
        </SafeAreaView>
    )
}
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ProfileUserCard } from '../molecules/profileUserMolecules/ProfileUserCard'
import { ProfileBalanceCard } from '../molecules/profileUserMolecules/ProfileBalanceCard'
import { ListItemTransaction } from '../organisms/profileItemsListOrganism/ListItemTransaction'

export const ProfilePage = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      >
        <ProfileUserCard />
        <ProfileBalanceCard />
        <ListItemTransaction />
      </ScrollView>
    </SafeAreaView>
  )
}




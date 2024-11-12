import React from 'react'
import {SafeAreaView } from 'react-native'
import { ProfileUserCard } from '../molecules/profileUserCardMolecule/ProfileUserCard'
import { ProfileBalanceCard } from '../molecules/profileUserCardMolecule/ProfileBalanceCard'

export const ProfilePage = () => {
  return (
    <SafeAreaView>
        <ProfileUserCard/>
        <ProfileBalanceCard/>
    </SafeAreaView>
  )
}




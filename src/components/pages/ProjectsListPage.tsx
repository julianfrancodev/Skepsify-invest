import React from 'react'
import { SafeAreaView } from 'react-native'
import { SearchHeader } from '../atoms/SearchHeader'
import { CardListProjectListing } from '../organisms/projectListingCardListOrganism/CardListProjectListing'

export const ProjectListPage = () => {
  return (
    <SafeAreaView>
        <SearchHeader/>
        <CardListProjectListing/>
    </SafeAreaView>
  )
}
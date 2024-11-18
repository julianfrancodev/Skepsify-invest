import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { InputSearch } from '../atoms/InputSearch'
import { SearchItemsList } from '../organisms/searchItemsListOrganism/SearchItemsList'

export const SearchPage = () => {
  return (
    <SafeAreaView
    >
      <View>
        <InputSearch />
        <SearchItemsList />
      </View>
    </SafeAreaView>
  )
}
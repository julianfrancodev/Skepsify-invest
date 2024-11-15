import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export const SearchHeader = () => {
  return (
    <View style={styles.header}>
      <Feather name="dollar-sign" size={25} color="black" />
      <Text style={styles.title}>Skepsify Invest</Text>
      <TouchableOpacity onPress={() => console.log('search i')} style={styles.searchButton}>
        <Feather name="search" size={25} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    flex: 1
  },
  searchButton: {
    marginLeft: 'auto'
  }
})
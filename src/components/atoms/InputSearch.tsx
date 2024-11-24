import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export const InputSearch = () => {
  const [searchText, setSearchText] = useState('')

  const clearSearch = () => {
    setSearchText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busca un negocio local"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity>
        <Feather name="search" size={20} color="#999" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 15
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginRight: 5
  },
  clearButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#000',
    fontSize: 14,
  },
})
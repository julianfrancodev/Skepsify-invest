import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

interface SearchItemProps {
  title: string;
  imageUrl: string;
}

export const SearchItem: React.FC<SearchItemProps> = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  },
  divider: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    height: 1,
    backgroundColor: '#ccc',
  },
})
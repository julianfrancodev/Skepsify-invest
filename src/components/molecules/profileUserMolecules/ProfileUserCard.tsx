import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const ProfileUserCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Katherinne Camacho R</Text>
        <Text style={styles.description}>Perfil del inversor</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
})
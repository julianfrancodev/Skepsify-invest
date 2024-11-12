import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export const ProfileBalanceCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>$50.000.000,00</Text>
        <Text style={styles.totalBalance}>Saldo invertido</Text>
      </View>
      <Image 
        source={{ uri: 'https://cdn.icon-icons.com/icons2/1850/PNG/512/statistics_116490.png' }} 
        style={styles.graphImage} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5C6CB',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  balanceContainer: {
    flex: 1,
    marginLeft: 10,
  },
  balance: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: -20,
  },
  totalBalance: {
    fontSize: 15,
    marginTop: 5,
  },
  graphImage: {
    width: 150,
    height: 150,
  },
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ItemListTransactionProps {
  date: string;
  description: string;
  amount: string | number;
}

export const ItemListTransaction: React.FC<ItemListTransactionProps> = ({ date, description, amount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10
  },
  date: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 14,
    color: '#333',

  },
  description: {
    marginTop: 30,
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
    marginBottom: 10
    
  },
  amount: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    fontSize: 16,
    color: 'black',
  },
})
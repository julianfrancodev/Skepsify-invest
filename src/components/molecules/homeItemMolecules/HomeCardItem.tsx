import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { Button } from '../../atoms/Button'

interface HomeCardItemProps {
  index: number
}

const HomeCardItem: React.FC<HomeCardItemProps> = ({ index }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Negocios locales</Text>
        <View style={styles.row}>
          <Text style={styles.title}>Invierte</Text>
          <Feather name="alert-circle" size={18} color="black" />
          <Text style={styles.explore}>Explora</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Ver Negocios'} onPress={function (): void {
            throw new Error('Function not implemented.')
          }} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5C6CB',
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 26,
    flex: 1,
    fontWeight: '600',
  },
  explore: {
    marginLeft: 5,
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 20, // Add vertical space above the button
  },
})

export default React.memo(HomeCardItem);
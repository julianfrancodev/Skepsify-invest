import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface HomeCardItemProps {
  index: number
}

const HomeCardItem: React.FC<HomeCardItemProps> = ({ index }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {index}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',

  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
})

export default React.memo(HomeCardItem);
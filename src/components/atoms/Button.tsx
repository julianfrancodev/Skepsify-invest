import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native'

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.buttonInner}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A3C4F3',
    borderRadius: 12,
  },
  buttonInner: {
    padding: 10,
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    textAlign: 'center', // Ensure text is centered
  },
})
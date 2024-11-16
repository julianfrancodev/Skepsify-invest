import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native'

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style, outline }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, outline && styles.outlineButton, style]}>
      <View style={styles.buttonInner}>
        <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A3C4F3',
    borderRadius: 12,
  },
  outlineButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#A3C4F3',
  },
  buttonInner: {
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  outlineButtonText: {
    color: 'black',
  },
})
import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import { Button } from '../../atoms/Button';

interface CardProjectListProps {
  imageUrl: string;
  title: string;
  description: string;
  progress: number;
  progressText: string;
  button1Title: string;
  button1Action: () => void;
  button2Title: string;
  button2Action: () => void;
}

export const CardProjectList: React.FC<CardProjectListProps> = ({
  imageUrl,
  title,
  description,
  progress,
  progressText,
  button1Title,
  button1Action,
  button2Title,
  button2Action
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Progress.Bar borderWidth={2} progress={progress} height={10} width={330} color='#A3C4F3' />
      <Text style={styles.progressText}>{progressText}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={button1Title}
          onPress={button1Action}
          style={styles.button}
        />
        <Button
          title={button2Title}
          onPress={button2Action}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 11,
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#666'
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  button: {
    flex: 1,
    marginHorizontal: 5
  }
})
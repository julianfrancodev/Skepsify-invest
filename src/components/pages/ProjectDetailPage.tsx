import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { Button } from '../atoms/Button'
import { useNavigation } from '@react-navigation/native'

export const ProjectDetailPage = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Volver" onPress={() => navigation.goBack()} style={{padding: 5, paddingHorizontal: 20}}  />
        <Button title="Compartir" style={{padding: 5, paddingHorizontal: 10,}} onPress={() => { /* Acción para el botón de Share */ }}   />
      </View>
      <View style={styles.content}>
        <Text style={styles.projectName}>Proyecto Omega</Text>
        <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1663933533712-eef7095f782b?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.projectImage} />
        <Text style={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula erat, convallis eget lorem ullamcorper, varius condimentum felis. Nulla facilisi. Morbi elit ipsum, porttitor fermentum augue id, pharetra fermentum ex.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10
  },
  content: {
    padding: 20,
    alignItems: 'flex-start',
  },
  projectName: {
    fontSize: 36,
    fontWeight: 'semibold',
    marginBottom: 20,
  },
  projectImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 12
  },
  projectDescription: {
    fontSize: 18,
    textAlign: 'justify',
    marginTop: 10
  },
})
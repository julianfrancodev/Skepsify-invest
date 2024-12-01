import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleSheet, View } from 'react-native'

export const TittleSectionWithActionButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ultimas Actualizaciones
            </Text>
            <TouchableOpacity>
                <Text>
                    Ver todo
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    title: {
        fontWeight: 'bold',
    }
})

import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

export const NotificationCardItem = () => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View>
                    <Feather name="bell" size={25} color="grey" />
                </View>
                <Text>
                    Administra tus inversiones
                </Text>
                <View>
                    <Feather name="arrow-right" size={25} color="grey" />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 14,
        marginVertical: 20,
        marginBottom: 100,
        marginHorizontal: 15
    },
    title: {
        fontWeight: 'bold',
    },

})
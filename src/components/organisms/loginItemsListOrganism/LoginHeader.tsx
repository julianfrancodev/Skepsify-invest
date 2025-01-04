import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';


export const LoginHeader = () => {

 
    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../../src/assets/images/login_img.png')}
                style={styles.image}
            />
            <Text style={styles.titleText}>Encuentra donde invertir.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    image: {
        width: 310,
        height: 310,
        alignSelf: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
    },
})
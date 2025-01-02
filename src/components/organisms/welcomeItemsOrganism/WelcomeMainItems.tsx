import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from '../../atoms/Button';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

export const WelcomeMainItems = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => console.log('Back')}>
                <Feather name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>
                Descubre
            </Text>
            <Text style={styles.subtitle}>
                Invierte en negocios locales y proyectos emergentes.
            </Text>
            <FastImage
                source={require('../../../../src/assets/images/welcome_img.png')}
                style={styles.image}
            />
            <Button title={'Explorar'} onPress={() => navigation.navigate('LoginPage' as never)} style={styles.button} textStyle={styles.buttonText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
        paddingHorizontal: 20,
        paddingTop: 20    
    },
    backIcon: {
        position: 'absolute',
        top: 25,
        left: 25,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 21,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: '300',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        marginBottom: 40,
    },
    button: {
        width: '100%',
        paddingVertical: 6,
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 18,
    }
})
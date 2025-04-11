import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface AuthHeaderProps {
    title: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../../src/assets/images/login_img.png')}
                style={styles.image}
            />
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

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
});
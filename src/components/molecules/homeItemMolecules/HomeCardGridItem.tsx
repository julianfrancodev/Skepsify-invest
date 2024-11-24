import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

interface HomeCardGridItemProps {
    iconName: string
    title: string
    subtitle: string
}

export const HomeCardGridItem: React.FC<HomeCardGridItemProps> = ({ iconName, title, subtitle }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Feather name={iconName} size={20} color="black" />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 16,
    },
    iconContainer: {
        backgroundColor: '#F5C6CB',
        padding: 10,
        borderRadius: 24,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
})
import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { ItemListTransaction } from '../../molecules/profileUserMolecules/ItemListTransaction'

const transacciontsList = [
    {
        key: '1',
        date: '25 Oct 1999',
        description: 'Compra 10 Acciones Apple',
        amount: '$1.000.000'
    },
    {
        key: '2',
        date: '25 Nov 1999',
        description: 'Compra 45 Acciones Apple',
        amount: '$2.000.000'
    },
    {
        key: '3',
        date: '25 Dic 1999',
        description: 'Compra 2 Acciones Apple',
        amount: '$3.000.000'
    },
    {
        key: '4',
        date: '25 Ene 2000',
        description: 'Compra 4 Acciones Apple',
        amount: '$4.000.000'
    },
    {
        key: '5',
        date: '25 Feb 2000',
        description: 'Compra 6 Acciones Apple',
        amount: '$5.000.000'
    }
]

export const ListItemTransaction = () => {
    return (

        <FlatList
            scrollEnabled={false}
            ListHeaderComponent={<Text style={styles.text}>Transacciones Recientes</Text>}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={transacciontsList}
            renderItem={({ item }) => (
                <ItemListTransaction
                    date={item.date}
                    description={item.description}
                    amount={item.amount}
                />
            )}
            keyExtractor={item => item.key}
        />
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10
    }
})



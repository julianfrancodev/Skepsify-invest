import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { SearchItem } from '../../molecules/searchItemMolescules/SearchItem'

const searchItemsList = [
    { id: '1', title: 'Proyecto Alpha', imageUrl: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', title: 'Proyecto Betha', imageUrl: 'https://plus.unsplash.com/premium_photo-1686285539787-d10f663a805c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYWwlMjBidXNzaW5lc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '3', title: 'Proyecto Epsilon', imageUrl: 'https://plus.unsplash.com/premium_photo-1686981905868-c28fa2b97eaf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', title: 'Proyecto Delta', imageUrl: 'https://images.unsplash.com/photo-1617694455376-e327ed1bb9ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', title: 'Proyecto Omega', imageUrl: 'https://plus.unsplash.com/premium_photo-1674932399535-fc3ad5174b1b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

export const SearchItemsList = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={searchItemsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <SearchItem
                    title={item.title}
                    imageUrl={item.imageUrl}
                />
            )}
            style={styles.flatListContent}
        />
    )
}


const styles = StyleSheet.create({
    flatListContent: {
        flexGrow: 1,
        marginTop: 10,
        marginHorizontal: 5
    },
})
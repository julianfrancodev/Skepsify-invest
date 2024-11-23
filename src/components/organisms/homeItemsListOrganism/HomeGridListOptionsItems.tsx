import React from 'react'
import { Text, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { HomeCardGridItem } from '../../molecules/homeItemMolecules/HomeCardGridItem';


const dataGrid = [
    {
        iconName: 'shopping-bag',
        title: 'Explorar',
        subtitle: 'Explora negocio emergentes para invertir'
    },
    {
        iconName: 'gift',
        title: 'Regalos',
        subtitle: 'Invierte y recibe regalos de los negocios'
    },
    {
        iconName: 'search',
        title: 'Buscar',
        subtitle: 'Encuentra tu negocio ideal'
    },
    {
        iconName: 'shopping-cart',
        title: 'Carrito',
        subtitle: 'Completa tu inversion en el carrito'
    },
]

export const HomeGridListOptionsItems = () => {
    return (
        <View>

            <FlatGrid
                itemDimension={130}
                data={dataGrid}
                renderItem={({ item }) => (<HomeCardGridItem iconName={item.iconName} title={item.title} subtitle={item.subtitle} />)}
                spacing={15}
            />

        </View>
    )
}


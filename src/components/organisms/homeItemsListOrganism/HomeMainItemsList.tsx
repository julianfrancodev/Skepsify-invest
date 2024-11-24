import React from 'react'
import {View, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import HomeCardItem from '../../molecules/homeItemMolecules/HomeCardItem';

export const HomeMainItemsList = () => {

    const width = Dimensions.get('window').width;

    return (
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <HomeCardItem
                        index={index}
                    />
                )}
            />
    )
}


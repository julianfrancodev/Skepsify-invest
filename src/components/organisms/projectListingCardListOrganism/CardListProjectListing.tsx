import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { CardProjectList } from '../../molecules/projectListMolecules/CardProjectList'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();


const projectList = [
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663933533712-eef7095f782b?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Proyecto Beta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula erat, convallis eget lorem ullamcorper, varius condimentum felis.',
        progress: 0.5,
        progressText: '50% Completado',
        button1Title: 'Ver Proyecto',
        button1Action: () => navigation.navigate('ProjectDetailPage' as never),
        button2Title: 'Soporte',
        button2Action: () => console.log('Soporte Proyecto 1'),
        urlRedirect: 'ProjectDetailPage'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1557113166-6bf8102e535b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Proyecto Apha',
        description: 'Descripción del Proyecto 2',
        progress: 0.75,
        progressText: '75% Completado',
        button1Title: 'Ver Proyecto',
        button1Action: () => navigation.navigate('ProjectDetailPage' as never),
        button2Title: 'Soporte',
        button2Action: () => console.log('Soporte Proyecto 2'),
        urlRedirect: 'ProjectDetailPage'

    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1520218508822-998633d997e6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Proyecto Omega',
        description: 'Descripción del Proyecto 3',
        progress: 0.2,
        progressText: '20% Completado',
        button1Title: 'Ver Proyecto',
        button1Action: () => navigation.navigate('ProjectDetailPage' as never),
        button2Title: 'Soporte',
        button2Action: () => console.log('Soporte Proyecto 3'),
        urlRedirect: 'ProjectDetailPage'

    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1612949059443-e706f4c0f41a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Proyecto Delta',
        description: 'Descripción del Proyecto 4',
        progress: 0.9,
        progressText: '90% Completado',
        button1Title: 'Ver Proyecto',
        button1Action: () => navigation.navigate('ProjectDetailPage' as never),
        button2Title: 'Soporte',
        button2Action: () => console.log('Soporte Proyecto 4'),
        urlRedirect: 'ProjectDetailPage'

    },
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Proyecto Epsilon',
        description: 'Descripción del Proyecto 5',
        progress: 1.0,
        progressText: '100% Completado',
        button1Title: 'Ver Proyecto',
        button1Action: () => navigation.navigate('ProjectDetailPage' as never),
        button2Title: 'Soporte',
        button2Action: () => console.log('Soporte Proyecto 5'),
        urlRedirect: 'ProjectDetailPage'

    }
];

export const CardListProjectListing = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={projectList}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <CardProjectList
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    progress={item.progress}
                    progressText={item.progressText}
                    button1Title={item.button1Title}
                    button1Action={item.button1Action}
                    button2Title={item.button2Title}
                    button2Action={item.button2Action}
                />
            )}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});


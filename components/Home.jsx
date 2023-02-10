import React from 'react'
import AddButton from './AddButton'
import ListBday from './ListBday'
import { Surface } from 'react-native-paper'


export default function Home() {
    return (
        <>
        <Surface style={{backgroundColor:"black", height:"100%"}} elevation={4}>
            <ListBday />

        </Surface>
            <AddButton />
        </>
    )
}

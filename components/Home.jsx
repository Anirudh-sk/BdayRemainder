import React from 'react'
import AddButton from './AddButton'
import ListBday from './ListBday'
import { Surface } from 'react-native-paper'


export default function Home() {
    return (
        <>
        <Surface style={{backgroundColor:"#0D0D0D", height:"100%"}} elevation={12}>
            <ListBday />

        </Surface>
            <AddButton />
        </>
    )
}

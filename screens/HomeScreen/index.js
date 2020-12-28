import React from 'react'
import {Text, View, SafeAreaView } from 'react-native'
import styles from './styles'

//Components
import Shower from '../../Components/DevComps/Shower'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Shower />
        </SafeAreaView>
    )
}

export default HomeScreen

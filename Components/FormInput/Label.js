import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const Label = ({text, style}) => {
    return (
        <Text style={[styles.Label, style]}>{text}</Text>
    )
}

export default Label

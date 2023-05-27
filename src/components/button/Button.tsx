import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from '../body/Body'

import { useTheme } from '@react-navigation/native'
import { theme } from '../../assets/Theme'

type ButtonProps = {
    text: string
    onPress: () => void
}

const Button = ({ ...props }: ButtonProps) => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: colors.card }]} onPress={props.onPress}>
            <Body>{props.text}</Body>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.default
    }
})

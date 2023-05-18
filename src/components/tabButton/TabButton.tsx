import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { useTheme } from '@react-navigation/native'
import Body from '../body/Body'
import { theme } from '../../assets/Theme'

type TabButtonProps = {
    text: string
    isActive: boolean
    onPress: () => void
}

const TabButton = ({ ...props }: TabButtonProps) => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.3}
            style={[styles.container, { backgroundColor: props.isActive ? colors.primary : colors.card }]}
            onPress={props.onPress}
        >
            <Body style={{ color: props.isActive ? colors.black : colors.primary }}>{props.text}</Body>
        </TouchableOpacity>
    )
}

export default TabButton

const styles = StyleSheet.create({
    container: {
        borderRadius: theme.radius.default,
        padding: 5,
        paddingHorizontal: 7.5,
        height: 35,
        minWidth: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

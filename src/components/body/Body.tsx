import { StyleProp, Text, TextStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { theme } from '../../assets/Theme'

type BodyProps = {
    children?: React.ReactNode
    numberOfLines?: number
    style?: StyleProp<TextStyle>
    onPress?: () => void
}

const Body = ({ ...props }: BodyProps) => {
    const { colors } = useTheme()
    const makeStyles = styles(colors)

    return (
        <Text
            style={[theme.textVariants.body, makeStyles.color, props.style]}
            numberOfLines={props.numberOfLines}
            onPress={props.onPress}
        >
            {props.children}
        </Text>
    )
}

export default Body

const styles = (colors: any) => ({
    color: {
        color: colors.text,
        fontFamily: 'MontserratRegular'
    }
})

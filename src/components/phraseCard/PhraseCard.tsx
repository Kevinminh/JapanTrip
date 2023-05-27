import { StyleSheet, View } from 'react-native'
import Body from '../body/Body'
import { styling, theme } from '../../assets/Theme'
import { useTheme } from '@react-navigation/native'

type PhraseCardProps = {
    item: {
        phrase: string
        prounance: string
        meaning: string
    }
}

const PhraseCard = ({ ...props }: PhraseCardProps) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, styling.gap5, { backgroundColor: colors.card }]}>
            <Body style={[{ color: colors.secondaryText }]}>
                {props.item.phrase} {props.item.prounance}
            </Body>
            <Body>{props.item.meaning}</Body>
        </View>
    )
}

export default PhraseCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: theme.radius.default,
        padding: 15,
        marginBottom: 10
    }
})

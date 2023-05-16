import { StyleSheet, View, Image, TextInput } from 'react-native'
import Body from '../../components/body/Body'
import { styling, theme } from '../../assets/Theme'

import { useTheme } from '@react-navigation/native'
import Button from '../../components/button/Button'

const CurrencyScreen = () => {
    const { colors } = useTheme()

    return (
        <View>
            <Body style={[theme.textVariants.t17SemiBold, styling.mb20]}>Valutakalkulator</Body>

            <View style={[styles.container, { backgroundColor: colors.card }]}>
                <View style={[styling.flexCenter, styling.spaceBetween]}>
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/dowiygzq3/image/upload/v1684254016/Flag_of_Japan.svg_tgsat0.webp'
                        }}
                        style={[styles.flag]}
                    />
                    <TextInput
                        placeholder="100 YEN"
                        placeholderTextColor={colors.secondaryText}
                        style={[styles.formInput]}
                    />
                </View>

                <View style={[styles.divider, { borderTopColor: colors.border }]} />

                <View style={[styling.flexCenter, styling.spaceBetween]}>
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/dowiygzq3/image/upload/v1684254014/Flag-Norway_l1pigi.webp'
                        }}
                        style={[styles.flag]}
                    />
                    <TextInput
                        placeholder="7.85 NOK"
                        placeholderTextColor={colors.secondaryText}
                        style={[styles.formInput]}
                    />
                </View>
            </View>

            <Body
                style={[
                    styling.textCenter,
                    theme.textVariants.t13Regular,
                    styling.mt10,
                    { color: colors.secondaryText }
                ]}
            >
                Dagens kurs:
                <Body style={{ color: colors.green }}> 0.079 </Body>
                (sist oppdatert: 1830, 16.05)
            </Body>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Button text="Vis detaljer" />
            </View>
        </View>
    )
}

export default CurrencyScreen

const styles = StyleSheet.create({
    flag: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.rounded
    },

    container: {
        padding: 20,
        marginHorizontal: 20,
        gap: 35
    },

    divider: {
        borderTopWidth: 1
    },

    formInput: {
        fontSize: 32
    }
})

import { ScrollView, StyleSheet, View } from 'react-native'
import Body from '../../components/body/Body'
import { useTheme } from '@react-navigation/native'

import { DiscoverData } from '../../assets/data/DiscoverData'
import { styling, theme } from '../../assets/Theme'

// COMP
import DiscoverCard from '../../components/discoverCard/DiscoverCard'

const DiscoverScreen = () => {
    const { colors } = useTheme()

    const kyotoData = DiscoverData.filter(item => item.city === 'KYOTO')
    const osakaDta = DiscoverData.filter(item => item.city === 'OSAKA')
    const tokyoData = DiscoverData.filter(item => item.city === 'TOKYO')

    return (
        <View style={[styling.flex1]}>
            <ScrollView>
                <View style={[styling.ph10, styling.flexCenter, styling.spaceBetween]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>Kyoto ⛩️</Body>
                    <Body style={[theme.textVariants.bodySecondary, { color: colors.secondaryText }]}>
                        06.06 - 10.06
                    </Body>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 0 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {kyotoData.map((item, index) => (
                        <DiscoverCard key={index} item={item} />
                    ))}
                </ScrollView>

                <View style={[styling.ph10, styling.mt40, styling.flexCenter, styling.spaceBetween]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>Osaka 🌸</Body>
                    <Body style={[theme.textVariants.bodySecondary, { color: colors.secondaryText }]}>
                        10.06 - 13.06
                    </Body>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 0 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {osakaDta.map((item, index) => (
                        <DiscoverCard key={index} item={item} />
                    ))}
                </ScrollView>

                <View style={[styling.ph10, styling.mt40, styling.flexCenter, styling.spaceBetween]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>Tokyo ⚡</Body>
                    <Body style={[theme.textVariants.bodySecondary, { color: colors.secondaryText }]}>
                        04.06 - 06.06 / 13.06 - 21.06
                    </Body>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 0 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {tokyoData.map((item, index) => (
                        <DiscoverCard key={index} item={item} />
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({})

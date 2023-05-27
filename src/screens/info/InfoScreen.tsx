import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from '../../components/body/Body'
import { styling, theme } from '../../assets/Theme'
import { HotelData } from '../../assets/data/HotelData'
import HotelCard from '../../components/hotelCard/HotelCard'
import PhraseCard from '../../components/phraseCard/PhraseCard'
import { useTheme } from '@react-navigation/native'
import { PhrasesData } from '../../assets/data/Phrases'

const InfoScreen = () => {
    const { colors } = useTheme()
    return (
        <View style={[styling.flex1]}>
            <ScrollView>
                <View style={[styling.ph20]}>
                    <Body style={[theme.textVariants.subtitle]}>Hotels</Body>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {HotelData.map((item, index) => (
                        <HotelCard key={index} data={item} />
                    ))}
                </ScrollView>

                <View style={[styling.ph20, styling.mt40]}>
                    <Body style={[theme.textVariants.subtitle]}>Emergency numbers</Body>
                </View>
                <View style={[styling.ph10, styling.mt10]}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: colors.card }]} activeOpacity={0.3}>
                        <Body>🚓 Police 110</Body>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: colors.card }]} activeOpacity={0.3}>
                        <Body>🚒 Fire 119</Body>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: colors.card }]} activeOpacity={0.3}>
                        <Body>🚑 Ambulance 119</Body>
                    </TouchableOpacity>
                </View>

                <View style={[styling.ph20, styling.mt40, styling.mb10]}>
                    <Body style={[theme.textVariants.subtitle]}>Common phrases</Body>
                </View>

                <View style={[styles.phraseContainer]}>
                    {PhrasesData.map((item, index) => (
                        <PhraseCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderRadius: theme.radius.default,
        marginBottom: 10,
        maxWidth: 200,
        alignItems: 'center'
    },
    phraseContainer: {
        paddingHorizontal: 10
    }
})

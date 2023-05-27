import { ScrollView, StyleSheet, View } from 'react-native'
import Body from '../../components/body/Body'
import { styling, theme } from '../../assets/Theme'
import { HotelData } from '../../assets/data/HotelData'
import HotelCard from '../../components/hotelCard/HotelCard'

const InfoScreen = () => {
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
                        <HotelCard key={index} />
                    ))}
                </ScrollView>

                <View style={[styling.ph20, styling.mt40]}>
                    <Body style={[theme.textVariants.subtitle]}>Others</Body>
                </View>
            </ScrollView>
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({})

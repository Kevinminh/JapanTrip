import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Body from '../../components/body/Body'
import { RootStackParamList } from '../../navigation/NavigationTypes'
import { ScreenNames } from '../../navigation/stack/ScreenNames'
import { useNavigation, useTheme } from '@react-navigation/native'

import { FoodData } from '../../assets/data/FoodData'
import FoodCard from '../../components/foodCard/FoodCard'
import { styling, theme } from '../../assets/Theme'
import TabButton from '../../components/tabButton/TabButton'
import { DrinkData } from '../../assets/data/DrinkData'
import { DessertData } from '../../assets/data/DessertData'
import { useState } from 'react'

const HomeScreen = () => {
    const { colors } = useTheme()

    const [selectedFood, setSelectedFood] = useState('Sushi 🍣')
    const [selectedDrink, setSelectedDrink] = useState('Kaffe ☕️')
    const [selectedDessert, setSelectedDessert] = useState('Mochi 🍡')

    const navigation = useNavigation<RootStackParamList>()

    function navigate(data: object) {
        navigation.navigate(ScreenNames.DiscoverInfoScreen, { data: data })
    }

    // FILTERS
    const uniqueCategories = Array.from(new Set(FoodData.map(item => item.category)))
    const uniqueDrinkCategories = Array.from(new Set(DrinkData.map(item => item.category)))
    const uniqueDessertCategories = Array.from(new Set(DessertData.map(item => item.category)))

    const generalFoodCategory = FoodData.filter(item => item.category === 'Generelt')

    // SELECTED
    const selectedFoodCategory = FoodData.filter(item => item.category === selectedFood)
    const selectedDrinkCategory = DrinkData.filter(item => item.category === selectedDrink)
    const selectedDessertCategory = DessertData.filter(item => item.category === selectedDrink)

    return (
        <View style={[styling.flex1]}>
            <ScrollView>
                <View style={[styling.ph10]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>Overalt i Japan 🇯🇵</Body>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {generalFoodCategory.map((item, index) => (
                        <FoodCard item={item} onPress={() => navigate(item)} key={index} />
                    ))}
                </ScrollView>

                <View style={[styling.ph10, styling.mt40]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>🍱 Mmm Yummy 🍣</Body>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {uniqueCategories.map((item, index) => (
                        <TabButton
                            key={index}
                            text={item}
                            isActive={item === selectedFood}
                            onPress={() => setSelectedFood(item)}
                        />
                    ))}
                </ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {selectedFoodCategory.map((item, index) => (
                        <FoodCard item={item} onPress={() => navigate(item)} key={index} />
                    ))}
                </ScrollView>

                <View style={[styling.ph10, styling.mt40]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>🧋 Drinks 🧋</Body>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {uniqueDrinkCategories.map((item, index) => (
                        <TabButton
                            key={index}
                            text={item}
                            isActive={item === selectedDrink}
                            onPress={() => setSelectedDrink(item)}
                        />
                    ))}
                </ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {selectedDrinkCategory.map((item, index) => (
                        <FoodCard item={item} onPress={() => navigate(item)} key={index} />
                    ))}
                </ScrollView>

                <View style={[styling.ph10, styling.mt40]}>
                    <Body style={[theme.textVariants.t17SemiBold]}>🧁 For sukker elskere 🧁</Body>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {uniqueDessertCategories.map((item, index) => (
                        <TabButton
                            key={index}
                            text={item}
                            isActive={item === selectedDessert}
                            onPress={() => setSelectedDessert(item)}
                        />
                    ))}
                </ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[styling.mt10, { paddingLeft: 10 }]}
                    contentContainerStyle={[styling.gap15]}
                >
                    {selectedDessertCategory.map((item, index) => (
                        <FoodCard item={item} onPress={() => navigate(item)} key={index} />
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

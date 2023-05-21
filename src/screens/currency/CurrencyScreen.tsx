import { StyleSheet, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Body from '../../components/body/Body'
import { styling, theme } from '../../assets/Theme'

import { useTheme } from '@react-navigation/native'
import Button from '../../components/button/Button'
import { SetStateAction, useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'

// SVG
import RepeatArrow from '../../assets/svg/RepeatArrow.svg'

const CurrencyScreen = () => {
    // FLAGS
    const japan = 'https://res.cloudinary.com/dowiygzq3/image/upload/v1684254016/Flag_of_Japan.svg_tgsat0.webp'
    const norway = 'https://res.cloudinary.com/dowiygzq3/image/upload/v1684254014/Flag-Norway_l1pigi.webp'

    const { colors } = useTheme()

    const [rate, setRate] = useState(null)
    const [res, setRes] = useState(null)
    const [selectedRate, setSelectedRate] = useState('NOK')

    useEffect(() => {
        setCurrency(prev => ({ ...prev, nok: 100 * rate }))
        var requestURL = 'https://api.exchangerate.host/convert?from=JPY&to=NOK'
        var request = new XMLHttpRequest()
        request.open('GET', requestURL)
        request.responseType = 'json'
        request.send()

        request.onload = function () {
            var response = request.response

            setRate(response.result.toFixed(4))

            setRes(response)
            console.log(response)
        }
    }, [])

    const [currency, setCurrency] = useState<SetStateAction<{ jpy: number; nok: number }>>({
        jpy: 0,
        nok: 0
    })

    if (rate === null || res === null) return <Loader />

    const test = rate * 1000

    console.log('RATE: ', rate)

    return (
        <View style={[styling.flex1]}>
            <ScrollView contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
                {/* <Body style={[theme.textVariants.t17SemiBold, styling.mb20]}>Valutakalkulator</Body> */}

                <View style={[styles.container, { backgroundColor: colors.card }]}>
                    <View style={[styling.flexCenter, styling.spaceBetween]}>
                        <Image
                            source={{
                                uri: selectedRate === 'NOK' ? japan : norway
                            }}
                            style={[styles.flag]}
                        />
                        <TextInput
                            placeholder="100 YEN"
                            placeholderTextColor={colors.secondaryText}
                            style={[styles.formInput]}
                            value={selectedRate === 'NOK' ? currency.jpy.toString() : currency.nok.toString()}
                            onChangeText={text =>
                                selectedRate === 'NOK'
                                    ? setCurrency(prev => ({
                                          ...prev,
                                          nok: (parseFloat(text) * rate).toFixed(2),
                                          jpy: text
                                      }))
                                    : setCurrency(prev => ({
                                          ...prev,
                                          nok: text,
                                          jpy: (parseFloat(text) / rate).toFixed(2)
                                      }))
                            }
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={[styles.divider, { borderTopColor: colors.border }]}>
                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={[styles.repeatArrow]}
                            onPress={() => (selectedRate === 'NOK' ? setSelectedRate('JPY') : setSelectedRate('NOK'))}
                        >
                            <RepeatArrow width={30} height={30} fill={colors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styling.flexCenter, styling.spaceBetween]}>
                        <Image
                            source={{
                                uri: selectedRate === 'NOK' ? norway : japan
                            }}
                            style={[styles.flag]}
                        />
                        <TextInput
                            placeholder={`${test} NOK`}
                            placeholderTextColor={colors.secondaryText}
                            style={[styles.formInput, { color: colors.secondaryText }]}
                            value={
                                selectedRate === 'NOK'
                                    ? currency.nok.toString() === 'NaN'
                                        ? 'NOK'
                                        : currency.nok.toString()
                                    : currency.jpy.toString() === 'NaN'
                                    ? 'JPY'
                                    : currency.jpy.toString()
                            }
                            editable={false}
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
                    <Body style={{ color: colors.green }}> {rate} </Body>
                    Sist oppdatert: {res.date}
                </Body>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Button text="Vis detaljer" />
                </View>
            </ScrollView>
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
        padding: 25,
        marginHorizontal: 20,
        gap: 45,
        borderRadius: theme.radius.default
    },

    divider: {
        borderTopWidth: 1
    },

    formInput: {
        fontSize: 32,
        color: 'white'
    },
    repeatArrow: {
        position: 'absolute',
        top: -15,
        left: 10
    }
})

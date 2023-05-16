import { StackActionType } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
    dispatch(arg0: StackActionType): unknown
    goBack(): unknown
    popToTop(): unknown
    pop(): unknown
    navigate(arg0: string, arg1?: object): void
    HomeScreen: undefined
    RegisterScreen: {
        email: string
    }
}

export type BottomTabNavigatorParamList = {
    HomeTab: undefined
    DiscoverTab: undefined
    CurrencyTab: undefined
    ProfileTab: { isModal: false }
    BookingTab: { enableChevron: false }
    ExploreTab: { isModal: false }
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>

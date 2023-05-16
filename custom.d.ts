import { useNavigation } from '@react-navigation/native'

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
    declare module '*.svg' {
        import React = require('react')

        export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
        const width: number
        const height: number
        const fill: any
        export default src
    }

    declare module '*.png' {
        const content: any
        export default content
    }

    export type ExtendedTheme = {
        dark: boolean
        colors: {
            background: string
            card: string
            text: string
            border: string
            primary: string
            primarySecond: string
            primaryDarker: string
            highlight: string
            notification: string
            secondaryText: string
            red: string
            green: string
            yellow: string
            disabled: string
            black: string
            white: string
            formInput: string
            borderPrimary: string
            primaryLightMode: string
            cardSecondary: string
            gray: string
            cardDarkMode: string
            orange: string
            lightGray: string
            //
            borderCancelled: string
            textCancelled: string
            primaryCancelled: string
            placeholderText: string
            divider: string
            cardMode: string
            primaryLighter: string
        }
    }
    export function useTheme(): ExtendedTheme
}

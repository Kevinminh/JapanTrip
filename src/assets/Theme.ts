import { Dimensions, StyleProp, TextStyle, ViewStyle } from 'react-native'

export const screenDims = {
    ScreenHeight: Dimensions.get('window').height,
    ScreenWidth: Dimensions.get('window').width
}

export const theme = {
    colors: {
        primary: '#FF851C',
        primarySecond: '#3B34A6',
        darkPrimary: '#938ced',
        primaryLightMode: '#efeefc',
        primaryDarker: '#46394e',
        primaryDark: '#43434C',
        primaryLighter: '#9690ee',

        disabled: '#BFC2C9',
        disabledDarkMode: '#f0effc',

        black: '#222',
        border: '#bfc2c9',
        borderLightMode: '#d2d3db',
        borderDarkmode: '#222',
        cardLightMode: '#DBDBDB',
        // cardDarkMode: '#1b2130',
        cardDarkMode: '#1b2130',
        cardSecondaryDarkMode: '#121623',

        //
        cardDark: '#262626',
        cardWhite: '#bfc2c9',

        // backgroundLightMode: '#f9f9f9',
        backgroundLightMode: '#F8F8FF',
        backgroundDarkMode: '#000',
        // backgroundDarkMode: '#060a14',
        // cardSecondaryDarkMode: '#121623',
        navbarDark: '#0d0d0d',
        navbarLight: '#f9f9f9',

        formInput: '#1f222a',
        darkBlue: '#060a14',

        textLightMode: '#22262F',
        textDarkMode: '#FFFFFF',

        red: '#f75555',
        yellow: '#ffce44',
        yellowLight: '#FFEADD',
        green: '#00FA9A',
        orange: '#FF7F50',

        secondaryText: '#a4a5a6',
        // secondaryTextLight: '#909191',
        secondaryTextLight: '#909191',

        white: '#FFFFFF'
    },

    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
    // TODO ADD IN THE REQUIRED FONT FAMILIES

    radius: {
        default: 7.5,
        rounded: 500
    },

    textVariants: {
        // REGULAR
        t10Regular: {
            fontSize: 10,
            fontFamily: 'MontserratRegular'
        },

        t13Regular: {
            fontSize: 13,
            fontFamily: 'MontserratRegular'
        },
        t15Regular: {
            fontSize: 15,
            fontFamily: 'MontserratRegular'
        },
        t17Regular: {
            fontSize: 17,
            fontFamily: 'MontserratRegular'
        },
        t19Regular: {
            fontSize: 19,
            fontFamily: 'MontserratRegular'
        },
        t19Light: {
            fontSize: 19,
            fontFamily: 'MontserratLight'
        },
        t21Regular: {
            fontSize: 21,
            fontFamily: 'MontserratRegular'
        },
        t21Light: {
            fontSize: 21,
            fontFamily: 'MontserratLight'
        },

        t23Regular: {
            fontSize: 23,
            fontFamily: 'MontserratRegular'
        },
        t25Regular: {
            fontSize: 25,
            fontFamily: 'MontserratRegular'
        },
        t27Regular: {
            fontSize: 27,
            fontFamily: 'MontserratRegular'
        },
        t29Regular: {
            fontSize: 29,
            fontFamily: 'MontserratRegular'
        },

        // MEDIUM
        t13Medium: {
            fontSize: 13,
            fontFamily: 'MontserratMedium'
        },
        t15Medium: {
            fontSize: 15,
            fontFamily: 'MontserratMedium'
        },
        t17Medium: {
            fontSize: 17,
            fontFamily: 'MontserratMedium'
        },
        t19Medium: {
            fontSize: 19,
            fontFamily: 'MontserratMedium'
        },
        t21Medium: {
            fontSize: 21,
            fontFamily: 'MontserratMedium'
        },
        t23Medium: {
            fontSize: 23,
            fontFamily: 'MontserratMedium'
        },
        t25Medium: {
            fontSize: 25,
            fontFamily: 'MontserratMedium'
        },
        t27Medium: {
            fontSize: 27,
            fontFamily: 'MontserratMedium'
        },
        t29Medium: {
            fontSize: 29,
            fontFamily: 'MontserratMedium'
        },

        // SEMIBOLD
        t11SemiBold: {
            fontSize: 11,
            fontFamily: 'MontserratSemiBold'
        },

        t13SemiBold: {
            fontSize: 13,
            fontFamily: 'MontserratSemiBold'
        },
        t15SemiBold: {
            fontSize: 15,
            fontFamily: 'MontserratSemiBold'
        },
        t17SemiBold: {
            fontSize: 17,
            fontFamily: 'MontserratSemiBold'
        },
        t19SemiBold: {
            fontSize: 19,
            fontFamily: 'MontserratSemiBold'
        },
        t21SemiBold: {
            fontSize: 21,
            fontFamily: 'MontserratSemiBold'
        },
        t23SemiBold: {
            fontSize: 23,
            fontFamily: 'MontserratSemiBold'
        },
        t25SemiBold: {
            fontSize: 25,
            fontFamily: 'MontserratSemiBold'
        },
        t27SemiBold: {
            fontSize: 27,
            fontFamily: 'MontserratSemiBold'
        },
        t29SemiBold: {
            fontSize: 29,
            fontFamily: 'MontserratSemiBold'
        },

        // BOLD
        t13Bold: {
            fontSize: 13,
            fontFamily: 'MontserratBold'
        },
        t15Bold: {
            fontSize: 15,
            fontFamily: 'MontserratBold'
        },
        t17Bold: {
            fontSize: 17,
            fontFamily: 'MontserratBold'
        },
        t19Bold: {
            fontSize: 19,
            fontFamily: 'MontserratBold'
        },
        t21Bold: {
            fontSize: 21,
            fontFamily: 'MontserratBold'
        },
        t23Bold: {
            fontSize: 23,
            fontFamily: 'MontserratBold'
        },
        t25Bold: {
            fontSize: 25,
            fontFamily: 'MontserratBold'
        },
        t27Bold: {
            fontSize: 27,
            fontFamily: 'MontserratBold'
        },
        t29Bold: {
            fontSize: 29,
            fontFamily: 'MontserratBold'
        },

        // OTHER
        bodySecondary: {
            fontSize: 11,
            fontFamily: 'MontserratRegular'
        },
        body: {
            fontSize: 14,
            fontFamily: 'MontserratRegular'
        },

        bodySemiBold: {
            fontSize: 14,
            fontFamily: 'MontserratSemiBold'
        },

        bodyBig: {
            fontSize: 16,
            fontFamily: 'MontserratRegular'
        },

        bodyBigSemiBold: {
            fontSize: 16,
            fontFamily: 'MontserratSemiBold'
        },
        bodyBold: {
            fontSize: 15,
            fontFamily: 'MontserratBold'
        },

        subtitle: {
            fontSize: 18,
            fontFamily: 'MontserratBold'
        },
        title: {
            fontSize: 24,
            fontFamily: 'MontserratBold'
        },

        titleSemiBold: {
            fontSize: 24,
            fontFamily: 'MontserratSemiBold'
        },
        headerTitle: {
            fontSize: 34,
            fontFamily: 'MontserratBold'
        }
    }
}

export const styling = {
    // FLEX
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    } as ViewStyle,

    spaceBetween: {
        justifyContent: 'space-between'
    } as ViewStyle,

    spaceEvenly: {
        justifyContent: 'space-evenly'
    } as ViewStyle,

    flexEnd: {
        justifyContent: 'flex-end'
    } as ViewStyle,

    // ALIGNMENT
    textCenter: {
        textAlign: 'center'
    } as TextStyle,

    alignItemCenter: {
        alignItems: 'center'
    } as ViewStyle,

    // GAPS
    gap3: {
        gap: 3
    },
    gap4: {
        gap: 4
    },
    gap5: {
        gap: 5
    },

    gap7: {
        gap: 7
    },
    gap10: {
        gap: 10
    },

    gap15: {
        gap: 15
    },
    gap30: {
        gap: 30
    },
    gap40: {
        gap: 40
    },

    // PADDING

    p10: {
        padding: 10
    },

    ph10: {
        paddingHorizontal: 10
    },

    ph15: {
        paddingHorizontal: 15
    },
    ph20: {
        paddingHorizontal: 20
    },

    pb10: {
        paddingBottom: 10
    },

    pr10: {
        paddingRight: 10
    },

    pv15: {
        paddingVertical: 15
    },

    // MARGIN
    mv10: {
        marginVertical: 10
    },
    mv15: {
        marginVertical: 15
    },
    mv35: {
        marginVertical: 35
    },

    mt5: {
        marginTop: 5
    },

    mt10: {
        marginTop: 10
    },

    mt20: {
        marginTop: 20
    },

    mt30: {
        marginTop: 30
    },

    mt40: {
        marginTop: 40
    },

    mh20: {
        marginHorizontal: 20
    },

    mtm10: {
        marginTop: -10
    },

    mbm10: {
        marginBottom: -10
    },

    // MARGIN RIGHT
    mr5: {
        marginRight: 5
    },
    mr10: {
        marginRight: 10
    },

    // MARGIN BOT
    mb5: {
        marginBottom: 5
    },

    mb10: {
        marginBottom: 10
    },
    mb20: {
        marginBottom: 20
    },

    // FLEX
    flex1: {
        flex: 1
    }
}

// Used for modal shadow and card shadows
export const shadow = {
    shadow: {
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 6
    },
    modalShadow: {
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        elevation: 10
    },
    modalSuccessfull: {
        shadowColor: theme.colors.secondaryText,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 10
    }
}

// Used for modal line
export const modalLine = {
    width: 75,
    height: 4,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
    zIndex: 999,
    elevation: 999,
    position: 'absolute'
} as StyleProp<ViewStyle>

export const lightMode = {
    ...theme,
    colors: {
        ...theme.colors,
        background: theme.colors.backgroundLightMode,
        text: theme.colors.textLightMode,
        secondaryText: theme.colors.secondaryTextLight,
        card: '#FAFAFA',
        // card: '#e4e5f1',
        primary: theme.colors.darkPrimary,
        primarySecond: theme.colors.darkPrimary,
        primaryDarker: theme.colors.primaryDarker,
        border: theme.colors.borderLightMode,
        red: theme.colors.red,
        green: theme.colors.green,
        yellow: theme.colors.yellow,
        disabled: theme.colors.disabled,
        black: theme.colors.black,
        white: theme.colors.white,
        formInput: theme.colors.secondaryText,
        borderPrimary: '#C6C3F4',
        primaryLight: theme.colors.primaryLightMode,
        cardSecondary: '#ececec',
        gray: theme.colors.backgroundLightMode,
        cardDarkMode: theme.colors.cardDarkMode,
        orange: theme.colors.orange,
        lightGray: theme.colors.cardLightMode,
        //
        borderCancelled: '#ECEBFF',
        textCancelled: '#8E9095',
        primaryCancelled: '#CFCCFF',
        redCancelled: '#F9A7A7',
        placeholderText: '#c0c0c0',
        divider: '#ececec',
        cardMode: theme.colors.cardWhite,
        primaryLighter: theme.colors.primaryLighter
    }
}

export const darkMode = {
    ...theme,
    colors: {
        ...theme.colors,
        background: theme.colors.backgroundDarkMode,
        text: theme.colors.textDarkMode,
        secondaryText: theme.colors.secondaryText,
        card: '#1A1B20',
        primary: theme.colors.primary,
        primarySecond: theme.colors.darkPrimary,
        primaryDarker: theme.colors.primaryDarker,
        border: theme.colors.borderDarkmode,
        red: theme.colors.red,
        green: theme.colors.green,
        yellow: theme.colors.yellow,
        disabled: theme.colors.disabledDarkMode,
        black: theme.colors.black,
        white: theme.colors.white,
        formInput: theme.colors.formInput,
        borderPrimary: '#71708B',
        primaryLight: theme.colors.primaryLightMode,
        cardSecondary: theme.colors.cardSecondaryDarkMode,
        // gray: theme.colors.primaryDark,
        gray: theme.colors.backgroundDarkMode,
        cardDarkMode: theme.colors.cardDarkMode,
        orange: theme.colors.orange,
        lightGray: theme.colors.cardLightMode,
        //
        borderCancelled: '#121623',
        textCancelled: '#A4A5A6',
        primaryCancelled: '#121623',
        redCancelled: '#F9A7A7',
        placeholderText: '#808080',
        divider: '#1A1B20',
        cardMode: theme.colors.cardDark,
        primaryLighter: theme.colors.primaryLighter
    }
}

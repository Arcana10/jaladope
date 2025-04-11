export const colors = {
    primary: '#006EFF',
    white: '#FFFFFF',
    dark: '#000000',
    gray: '#888888',
    lightGray: '#EFEFEF',
    danger: '#FF0000',
    warning: '#FFC107',
    success: '#28A745',
    info: '#17A2B8',
}

export const fontFamily = {
    normal: 'Montserrat',
    light: 'MontserratLight',
    medium: 'MontserratMedium',
    semibold: 'MontserratSemi',
    bold: 'MontserratBold',
}

export const fontSize = {
    tiny: 10,
    small: 12,
    normal: 14,
    medium: 16,
    large: 18,
    subtitle: 20,
    title: 24,
    header: 32,
};

export const spacing = {
    tiny: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
};

export const borderRadius = {
    small: 4,
    medium: 8,
    large: 16,
    xl: 40,
    pill: 100
};
  
export const borderWidth = {
    thin: 1,
    normal: 2,
    thick: 4,
};

export const border = {
    normal: {
        borderWidth: borderWidth.thin,
        borderStyle: 'solid',
        borderColor: '#D9D9D9',
    },
    focused: {
        borderWidth: borderWidth.thin,
        borderStyle: 'solid',
        borderColor: '#000000',
    }
}
  
export const shadows = {
    light: {
        shadowColor: '#242424',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: '#242424',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 4,
    },
    dark: {
        shadowColor: '#242424',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
};

export const iconSizes = {
    iconSmall: 16,
    iconMedium: 24,
    iconLarge: 32,
    buttonHeight: 48,
    inputHeight: 40,
};  

export const lineHeights = {
    small: 18,
    normal: 20,
    medium: 24,
    large: 28,
};

export const opacities = {
    low: 0.1,
    medium: 0.5,
    high: 0.9,
};
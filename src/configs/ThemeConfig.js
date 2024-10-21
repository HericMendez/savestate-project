import { 
    THEME_COLOR, 
    DARK_MODE,
    GRAY_SCALE,
    BORDER,
    BODY_BACKGROUND
} from 'constants/ThemeConstant'

export function rgba(hex, opacity = 1) {
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        throw new Error('Invalid Hex');
    }
  
    const decimal = parseInt(hex.substring(1), 16);
  
    const r = (decimal >> 16) & 255;
    const g = (decimal >> 8) & 255;
    const b = decimal & 255;
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const baseTheme = {
  borderRadius: "0.25rem", // NES.css uses smaller border-radius
  colorPrimary: THEME_COLOR.BLUE,
  colorSuccess: THEME_COLOR.CYAN,
  colorWarning: THEME_COLOR.GOLD,
  colorError: THEME_COLOR.VOLCANO,
  colorInfo: THEME_COLOR.BLUE,
  colorText: GRAY_SCALE.GRAY,
  colorBorder: BORDER.BASE_COLOR,
  colorBgBody: BODY_BACKGROUND,
  controlHeight: "2.5rem", // NES.css controls are generally smaller
  controlHeightLG: "3rem",
  controlHeightSM: "2rem",
  fontFamily: `'Courier New',  sans-serif`, // NES.css inspired font
  fontSizeHeading2: "1.25rem",
  fontSizeHeading4: "1rem",
};

const getBaseComponentThemeConfig = (
    {
        Button = {},
        Menu = {}, 
        Card = {},
        Table = {},
        Select = {},
        DatePicker = {},
        Layout = {},
        Input = {},
        Dropdown = {},
        Calendar = {}
    } = {}
) => {
    return {
        Button: {
            ...Button,
            borderRadius: baseTheme.borderRadius,
            padding: '0.5rem 1rem', // NES.css button padding
            fontSize: '1rem' // NES.css button font size
        },
        Dropdown: {
            controlPaddingHorizontal: '0.5rem',
            controlHeight: '2.5rem',
            borderRadiusLG: baseTheme.borderRadius,
            paddingXXS: '0.25rem 0',
            ...Dropdown
        },
        Calendar: {
            ...Calendar,
            borderRadius: baseTheme.borderRadius,
            controlHeight: '2.5rem'
        },
        Checkbox: {
            lineWidth: 1,
            borderRadiusSM: baseTheme.borderRadius
        },
        Card: {
            colorTextHeading: GRAY_SCALE.GRAY_DARK,
            paddingLG: '1rem',
            borderRadius: baseTheme.borderRadius,
            ...Card
        },
        Layout: {
            colorBgBody: BODY_BACKGROUND,
            colorBgHeader: GRAY_SCALE.WHITE,
            borderRadius: baseTheme.borderRadius,
            ...Layout
        },
        Breadcrumb: {
            colorTextDescription: GRAY_SCALE.GRAY_LIGHT,
            colorText: baseTheme.colorPrimary,
            colorBgTextHover: 'transparent'
        },
        Menu: {
            colorItemBg: 'transparent',
            colorActiveBarHeight: 0,
            colorActiveBarWidth: '0.25rem',
            colorItemTextSelectedHorizontal: baseTheme.colorPrimary,
            colorItemTextHover: baseTheme.colorPrimary,
            colorItemTextSelected: baseTheme.colorPrimary,
            colorItemBgSelected: rgba(baseTheme.colorPrimary, 0.1),
            colorItemBgHover: 'transparent',
            radiusItem: baseTheme.borderRadius,
            colorSubItemBg: 'transparent',
            itemMarginInline: '0.5rem',
            controlHeightLG: '2.5rem',
            controlHeightSM: '1.5rem',
            ...Menu
        },
        Input: {
            borderRadius: baseTheme.borderRadius,
            ...Input
        },
        Pagination: {
            paginationItemSize: '2rem',
            borderRadius: '50%',
            colorBgContainer: baseTheme.colorPrimary,
            colorPrimary:  GRAY_SCALE.WHITE,
            colorPrimaryHover: GRAY_SCALE.WHITE,
        },
        Steps: {
            wireframe: true,
            controlHeight: '2rem',
            waitIconColor: GRAY_SCALE.GRAY_LIGHT
        },
        DatePicker: {
            controlHeight: '2.5rem',
            controlHeightSM: '2rem',
            borderRadiusSM: baseTheme.borderRadius,
            lineWidthBold: 0,
            ...DatePicker
        },
        Radio: {
            fontSizeLG: '1rem'
        },
        Slider: {
            colorPrimaryBorder: rgba(baseTheme.colorPrimary, 0.8),
            colorPrimaryBorderHover: baseTheme.colorPrimary
        },
        Select: {
            paddingXXS: '0.25rem 0',
            controlHeight: '2.5rem',
            controlHeightSM: '2rem',
            controlItemBgActive: rgba(baseTheme.colorPrimary, 0.1),
            borderRadius: baseTheme.borderRadius,
            ...Select
        },
        TreeSelect: {
            controlHeightSM: '1.5rem'
        },
        Tooltip: {
            colorBgDefault: rgba(GRAY_SCALE.DARK, 0.75),
            controlHeight: '2rem'
        },
        Timeline: {
            lineType: 'dashed'
        },
        Tag: {
            lineHeight: 1.5
        },
        Table: {
            colorText: GRAY_SCALE.GRAY,
            tableHeaderBg: 'transparent',
            ...Table
        }
    }
}

export const lightTheme = {
    token: {
        ...baseTheme,
        colorTextBase: GRAY_SCALE.GRAY,
    },
    components: getBaseComponentThemeConfig()
}

export const darkTheme = {
    token: {
        ...baseTheme,
        colorTextBase: DARK_MODE.TEXT_COLOR,
        colorBgBase: DARK_MODE.BG_COLOR,
        colorBorder: DARK_MODE.BORDER_BASE_COLOR,
        colorText: DARK_MODE.TEXT_COLOR,
    },
    components: getBaseComponentThemeConfig({
        Button: {
            controlOutline: 'transparent',
            colorBorder: DARK_MODE.BORDER_BASE_COLOR,
            colorText: DARK_MODE.TEXT_COLOR,
        },
        Card: {
            colorTextHeading: DARK_MODE.HEADING_COLOR,
        },
        Layout: {
            colorBgBody: '#0D0D0D',
            colorBgHeader: DARK_MODE.BG_COLOR
        },
        Menu: {
            colorItemBgSelected: 'transparent',
            colorItemTextSelectedHorizontal: GRAY_SCALE.WHITE,
            colorItemTextHover: GRAY_SCALE.WHITE,
            colorItemTextSelected: GRAY_SCALE.WHITE,
            colorItemText: DARK_MODE.TEXT_COLOR,
            colorActiveBarWidth: '0.25rem',
            boxShadowSecondary: DARK_MODE.DROP_DOWN_SHADOW
        },
        Dropdown: {
            boxShadowSecondary: DARK_MODE.DROP_DOWN_SHADOW
        },
        Calendar: {
            controlItemBgActive: '#303a4e'
        },
        Select: {
            controlOutline: 'transparent',
            controlItemBgActive: DARK_MODE.ACTIVE_BG_COLOR,
            controlItemBgHover: DARK_MODE.HOVER_BG_COLOR,
            boxShadowSecondary: DARK_MODE.DROP_DOWN_SHADOW
        },
        Input: {
            controlOutline: 'transparent',
        },
        DatePicker: {
            controlOutline: 'transparent',
            boxShadowSecondary: DARK_MODE.DROP_DOWN_SHADOW,
            controlItemBgActive: DARK_MODE.ACTIVE_BG_COLOR,
            controlItemBgHover: DARK_MODE.HOVER_BG_COLOR,
        },
        Table: {
            colorText: DARK_MODE.TEXT_COLOR,
            colorTextHeading: DARK_MODE.HEADING_COLOR
        },
    })
}

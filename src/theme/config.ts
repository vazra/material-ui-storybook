import { lightBlue, yellow, red } from '@material-ui/core/colors'

const themeConfig = {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: lightBlue.A700,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: yellow[700],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  spacing: 8,
  typography: {
    // pxToRem: (size: number) => `${size / 16}rem`, // note: this is added as a fix to breaking sttorybook with themes wihout this override err: "htmlFontSize is not defined"
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  props: {
    // MuiButton: {
    //   size: 'small',
    // },
    // MuiFilledInput: {
    //   margin: 'dense',
    // },
    // MuiFormControl: {
    //   margin: 'dense',
    // },
    // MuiFormHelperText: {
    //   margin: 'dense',
    // },
    // MuiIconButton: {
    //   size: 'small',
    // },
    // MuiInputBase: {
    //   margin: 'dense',
    // },
    // MuiInputLabel: {
    //   margin: 'dense',
    // },
    // MuiListItem: {
    //   dense: true,
    // },
    // MuiOutlinedInput: {
    //   margin: 'dense',
    // },
    // MuiFab: {
    //   size: 'small',
    // },
    // MuiTable: {
    //   size: 'small',
    // },
    // MuiTextField: {
    //   margin: 'dense',
    // },
    // MuiToolbar: {
    //   variant: 'dense',
    // },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 16,
      },
    },
    // MuiIconButton: {
    //   sizeSmall: {
    //     // Adjust spacing to reach minimal touch target hitbox
    //     marginLeft: 4,
    //     marginRight: 4,
    //     padding: 12,
    //   },
    // },
  },
}

export default themeConfig

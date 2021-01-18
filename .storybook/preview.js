// .storybook/preview.js

// import React from 'react'

import muiTheme from '../src/theme'

import { ThemeProvider } from '@material-ui/core'
// import { createMuiTheme } from '@material-ui/core/styles'
import { addDecorator } from '@storybook/react'
// import { withThemes } from '@react-theming/storybook-addon'

// const providerFn = ({ theme, children }) => {
//   const muTheme = createMuiTheme(theme)
//   return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>
// }

// pass ThemeProvider and array of your themes to decorator
// addDecorator(withThemes(ThemeProvider, [muiTheme]))

addDecorator((story) => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

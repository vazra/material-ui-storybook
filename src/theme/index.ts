import { createMuiTheme } from '@material-ui/core/styles'
import themeConfig from './config'

//@ts-ignore
const theme = createMuiTheme(themeConfig)

//@ts-ignore
// delete theme.typography.htmlFontSize

console.log('theme.typography: ', theme.typography)

export default theme

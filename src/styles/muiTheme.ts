import { createTheme } from '@material-ui/core'

const MUI_THEME = createTheme({
  palette: {
    primary: {
      main: `#305de3`,
      light: '#58a6ff',
    },
    secondary: {
      main: '#21262d', // border-color, button-color
      dark: '#111316', // button-dark, background-color
      light: '#30363d',
      contrastText: '#c9d1d9',
    },
    text: {
      primary: '#8b949e',
      secondary: '#c9d1d9',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: '12px',
    },
  },
})

export { MUI_THEME }

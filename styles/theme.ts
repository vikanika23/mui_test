import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: '#171717'
    },
    secondary: {
      main: '#D01C69'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },

})



export default theme
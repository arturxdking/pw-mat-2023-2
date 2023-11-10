import {createTheme} from '@mui/material/styles'
import {yellow, pink} from '@mui/material/colors'

const theme = createTheme ({
    palette: {
        mode: 'dark', // o padrão é 'light'
        primary: {
            main: yellow[600],
        },
        secundary: {
            main: pink[500]
        }
    }
})

export default theme
import React from 'react'
import './App.css'
import HeaderBar from './ui/HeaderBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme'
import Box from '@mui/material/Box'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          width: '100vw',           // toda a largura da janela
          minHeight: '100vh',       // no mínimo, toda a altura da janela
          // cinza escudo, no modo dark
          backgroundColor: 'background.default'
        }}>
          <HeaderBar/>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App

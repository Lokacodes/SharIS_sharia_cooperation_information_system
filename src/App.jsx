import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MiniDrawer from './components/sideBar'
import Typography from '@mui/material/Typography'
import HomePage from './Pages/HomePage'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Monstserrat',
    },
    palette: {
      primary: {
        main: '#052831', // Change this color to the desired toolbar color
      },
    },
  });

  

  return (
    <>
      <ThemeProvider theme={theme}>

        <MiniDrawer>
          <HomePage />
        </MiniDrawer>
      </ThemeProvider>
    </>
  )
}

export default App

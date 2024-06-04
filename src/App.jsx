import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MiniDrawer from './components/sideBar'
import Typography from '@mui/material/Typography'
import HomePage from './Pages/HomePage'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Master from './Pages/Master'
import MockData from './Pages/MockData'
import Transaksi from './Pages/Transaksi'
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
        {/* <MiniDrawer>
          <HomePage />
        </MiniDrawer> */}

        <BrowserRouter>
          <MiniDrawer>
            <Routes>
              <Route path='/' exact element={<HomePage />}></Route>
              <Route path='/master' exact element={<Master />}></Route>
              <Route path='/mockdata' exact element={<MockData />}></Route>
              <Route path='/transaksi' exact element={<Transaksi />}></Route>
            </Routes>
          </MiniDrawer>
        </BrowserRouter>


      </ThemeProvider>
    </>
  )
}

export default App

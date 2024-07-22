import React from 'react'
import Navbar from './components/Navbar'
import styled , {ThemeProvider} from 'styled-components'
import {darkTheme} from "./utils/Themes"




const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      <Navbar />
      
    </div>
    </ThemeProvider>
  )
}

export default App

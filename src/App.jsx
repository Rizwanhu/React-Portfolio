import React from 'react'
import Navbar from './components/Navbar'
import styled , {ThemeProvider} from 'styled-components'
import {darkTheme} from "./utils/Themes"
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'

const Body = styled.div`
background-color: ${({theme})=> theme.bg};
width: 100%;
color: ${({theme})=> theme.text_primary};

height:90vh;
overflow-x: hidden;
position: relative;

`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar />
      <Body>
        <Main />
      </Body>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

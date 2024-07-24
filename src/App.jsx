import React from 'react'
import Navbar from './components/Navbar'
import styled , {ThemeProvider} from 'styled-components'
import {darkTheme} from "./utils/Themes"
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import Content from './components/Content'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'




const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;





const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar />
      <Body>
        <Main />
        
        <Wrapper>

        <Skills />
        <Experience />

        </Wrapper>

        <Projects />

        <Wrapper>
        <Education />
        <Contact />
        </Wrapper>


        <Contact />

        <Content />

      </Body>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

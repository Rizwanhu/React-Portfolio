import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
import Content from "./components/Content";

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

const SectionFallback = styled.div`
  min-height: 140px;
  width: 100%;
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <div className="relative">
            <Main />

            <Suspense fallback={<SectionFallback />}>
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>

              <Projects />

              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>

            </Suspense>
            <Footer />
            <Content />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";
import ProjectDetails from "./components/projectDetails/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

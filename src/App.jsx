// src/App.jsx

import React, { useState } from "react";
import { ConfigProvider, Layout } from "antd";
import { lightTheme, darkTheme } from "./Tema.js";
import Navigation from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import ExperienceAndProjects from "./Components/Experience/ExperienceProjects.jsx";
// Ganti impor komponen lama dengan yang baru
import EducationOrganization from "./Components/Educations/EducationOrganization.jsx";
import Contact from "./Components/Contacts/Contact.jsx";
import { resumeGabungan } from "./Data/Resume.jsx";

const { Content, Footer } = Layout;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("id");

  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  const textColor = isDarkMode
    ? "rgba(255, 255, 255, 0.85)"
    : "rgba(0, 0, 0, 0.88)";

  const toggleTheme = (checked) => {
    setIsDarkMode(checked);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const T = resumeGabungan[language];

  return (
    <ConfigProvider theme={currentTheme}>
      <Layout>
        <Navigation
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          theme={currentTheme}
          language={language}
          onLanguageChange={handleLanguageChange}
          navigationText={T.navigation}
        />
        <Content
          style={{
            padding: "0 48px",
            backgroundColor: currentTheme.token.colorBgLayout,
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <Hero data={T.resume} textColor={textColor} />
            <Skills data={T.resume.skills} textColor={textColor} />
            <ExperienceAndProjects
              data={{
                experience: T?.resume?.experience || [],
                projects:
                  T?.resume?.experience?.flatMap((job) => job.projects || []) ||
                  [],
              }}
              textColor={textColor}
              text={T?.experience_section || {}}
            />

            {/* Panggil komponen baru dengan prop 'text' */}
            <EducationOrganization
              data={T.resume}
              textColor={textColor}
              text={T.education_section || {}}
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: currentTheme.token.colorBgContainer,
          }}
        >
          {T.resume.name} ©{new Date().getFullYear()} - Created with Love helped
          by React & Ant Design
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;

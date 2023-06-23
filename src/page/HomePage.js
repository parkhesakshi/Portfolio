import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Education from "../components/education";
import Projects from "../components/projects";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
    </>
  );
};

export default HomePage;

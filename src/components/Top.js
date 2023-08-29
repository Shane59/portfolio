import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import PersonalProject from "./PersonalProject";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";


const Top = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <Hero />
      <PersonalProject personalProjects={props.personalProjects} />
      <AboutMe />
      <Footer />
    </>
  )
}

export default Top;
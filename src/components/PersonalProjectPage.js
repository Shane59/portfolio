import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonalProjectDetail from "./PersonalProjectDetail";


const PersonalProjectPage = (props) => {
  return (
    <>
      <Header />
      <PersonalProjectDetail personalProjects={props.personalProjects} />
      <Footer />
    </>
  )
}

export default PersonalProjectPage;
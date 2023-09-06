import React from "react";
import profileImg from '../assets/profile.jpeg';

const AboutMe = () => {
  return (
    <div id="aboutme" className="mt-5 mb-5 aboutme-wrapper">
      <h2 className='text-center'>About Me</h2>
      <div className="container">
        <div className="row justify-content-evenly mt-3">
          <div className="col-lg-4 col-md-auto col-sm-12 profile-img-container"><img className="profile-img" src={profileImg} alt="" /></div>
          <div className="col-lg-8 col-md-auto col-sm-12 profile-note mt-lg-0 mt-md-4 mt-sm-4 mt-5">
            <div>
              <h4>Summary</h4>
              <p>I am a dedicated and versatile software engineer with three years of hands-on experience in both front-end and back-end development. My passion lies in tackling challenging problems and creating innovative solutions to enhance our communities. I have a customer-centric mindset, always striving to deliver products and services that exceed expectations.</p>
            </div>
            <div>
              <h4>Technical Skills</h4>
              <p>
                <b><em>Front-end Development: </em></b>Proficient in HTML, CSS, JavaScript, and modern front-end libraries and frameworks such as React. Experienced in crafting responsive and user-friendly interfaces.
              </p>
              <p>
                <b><em>Back-end Development: </em></b>Skilled in server-side technologies such as Node.js and Java. Experienced in building full-stack web applications.
              </p> 
              <p><b><em>Version Control: </em></b>Familiar with Git and SVN and collaborative development workflows.</p>
            </div>
            <div>
              <h4>
                Personal Interersts
              </h4>
              <p>Outside of my professional life, I am a dog lover and an explorer of the world. I like outdoor activities and thrive on team sports, especially volleyball and tennis. My dedication to teamwork and communication skills extend beyond the workplace, making me not only an effective engineer but also an easygoing and collaborative team member.</p>
            </div>
            <a href="https://www.linkedin.com/in/shinya-aoi/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
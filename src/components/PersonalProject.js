import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const PersonalProject = (props) => {
  if (props.personalProjects !== null) {
    return (
      <div id='projects' className='mt-5 mb-5'>
        <h2 className='text-center'>Personal Project</h2>
        <div className='row justify-content-lg-evenly justify-content-md-evenly justify-content-sm-center justify-content-center mt-3 w-100 ms-auto me-auto'>
          {
            props.personalProjects.map((val, index) => {
              return (
                <ProjectCard
                  id={val.uid}
                  title={val.data.project_title[0].text}
                  imgUrl={val.data.thumbnail.url}
                  overview={val.data.overview[0].text}
                  techStack={val.data.body[0].items}
                  projectUrl={val.data.project_url.url}
                  githubUrl={val.data.github_url.url}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
  return null;
}

export default PersonalProject;
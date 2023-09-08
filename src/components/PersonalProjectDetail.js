import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RichTextComponents from "./RichTextComponents";

const PersonalProjectDetail = (props) => {
  const projectId = useParams();
  const projectDetail = props.personalProjects.filter(project => project.uid == projectId.id);
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  if (projectDetail[0] != undefined) {
    return (
      <div className="personal-project-detail-wrapper mt-5 mb-5">
        <h2 className="text-center">{projectDetail[0].data.project_title[0].text}</h2>
        <div className="row justify-content-center mt-5">
          <img src={projectDetail[0].data.thumbnail.url} alt="sample" className="col" />
          <div className="col overview-wrapper">
            <div className="mb-5">
              <h3>Overview</h3>
              <div><RichTextComponents text={projectDetail[0].data.overview}/></div>
            </div>
            <div className="mb-5">
              <h3>Tech Stacks</h3>
              {
                projectDetail[0].data.body[0].items.map((item, index) => {
                  return (
                    <img src={item.techstack_icon.url} alt="" key={index} className="techstack-icon" />
                  )
                })
              }
            </div>
            <div className="mb-5">
              <h3>URL</h3>
              <a href={projectDetail[0].data.github_url.url} target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalProjectDetail;
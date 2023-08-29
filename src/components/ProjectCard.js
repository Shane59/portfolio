import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link
      className="card project-card"
      style={{background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.imgUrl})`, backgroundSize: 'contain'}}
      to={`/personal-project/${props.id}`}
    >
      <span className="card-body position-absolute top-50 start-50 translate-middle card-title">{props.title}</span>
    </Link>
  )
}

export default ProjectCard;
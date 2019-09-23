import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Tilte - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe unde, magni nemo provident consectetur doloremque dolores cumque exercitationem facere in amet dolor! Quasi suscipit explicabo ipsa alias nihil iusto consequuntur.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Rapid Monkey</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

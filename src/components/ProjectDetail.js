import React from 'react';

const ProjectDetails = (props) => {
    console.log(props)
  return(
    <div className="projectDetailPage">
      <p>{props.project.name}</p>
          {/* <ul className='genres'>
            {props.show.genres.map((genre, index) =>
              <span key={index}>
                  {genre}
              </span>                        
            )}
          </ul> */}
    </div>
  )
}
export default ProjectDetails;
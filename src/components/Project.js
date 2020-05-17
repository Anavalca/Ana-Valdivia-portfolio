import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            {/* <div className='imgContainerSmall'></div> */}
            <div className='imgContainer'></div>
            <div className='infoContainer'>
                <span className='projectTitle'>{props.title}</span>
                <span className='projectName'>{props.name}</span>
                {/* <ul className='tags'>
                    {props.tags.map((tag, index) =>
                        <li key={index}>
                            {tag}
                        </li>                        
                    )}
                </ul> */}
            </div>
            
            </React.Fragment>
    
    )
}

export default Project;
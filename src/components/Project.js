import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div className='imgContainer'></div>
            <div className='infoContainer'>
                <span className='projectTitle'>{props.title}</span>
                <span className='projectName'>{props.name}</span>
            </div>
        </React.Fragment>
    )
}

export default Project;
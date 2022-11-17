import React from 'react';

const Project2 = (props) => {
    return (
        <React.Fragment>
            <img className='imgContainer' alt='mockup' src={props.mockup} />
            <div className='infoContainer'>
                <span className='projectTitle'>{props.title}</span>
                <span className='projectName'>{props.name}</span>
            </div>
        </React.Fragment>
    )
}

export default Project2;
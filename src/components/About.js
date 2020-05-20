import React from 'react';

const About = (props) => {
    console.log(props)
    return (
        <section className='aboutContainer'>
            
            <div className='infoContainer'></div>
            <div className='imgContainer'>
                <div className='circle'>
                    <span className='titleAbout' >About me</span>
                    </div>
            </div>

        </section>
    )
}

export default About;
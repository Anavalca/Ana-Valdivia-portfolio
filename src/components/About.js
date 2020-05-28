import React from 'react';
import CV from '../files/CV_Ana_Valdivia.pdf'

const About = (props) => {
    console.log(props)
    return (
        <section className='aboutContainer'>
            <div className='infoContainer'>
                <div className='line'></div>
                <p className='description'>Passionate about <span className='strongFont'>creative process</span> and design.</p> 
                <p className='description'>
                I have more than 4 years experience in audiovisual comunications, graphic design and marketing.</p>
                <p className='description'>               
                I'm an <span className='strongFont'>autodidactic</span> girl! My last challenge was to become a frontend developer. Now i love creating websites.</p>
                <div className='line'></div>
                <a className='buttonCV' href={CV} download="CV Ana Valdivia"> Download CV</a>
            </div>
            <div className='imgContainer'>
                <div className='circle'>
                    <span className='titleAbout' >About me</span>
                    </div>
            </div>

        </section>
    )
}

export default About;
import React from 'react';
import CV from '../files/cv_ana_valdivia_cano.pdf'

const About = () => {

    const handleScroll = () =>{
        window.scrollTo(0, 0)
    }

    return (
        <section className='aboutContainer'>
            <div className='infoContainer'>
                <div className='line'></div>
                <p className='description'>Passionate about <span className='strongFont'>creative process</span> and <span className='strongFont'>design</span>. I have more than 4 years experience in audiovisual comunications, graphic design and marketing.</p>
                <p className='description'>
                Now I work as a  <span className='strongFont'>frontend developer</span> for 3 years in companies like BBVA, Vodafone and Repsol. Love creating websites and interested in UI/UX.</p>
                <div className='line'></div>
                <a className='buttonCV' href={CV} download="CV Ana Valdivia"> Download CV</a>
            </div>
            <div title='go home' onClick={handleScroll}>
                <i className="arrowBack fas fa-chevron-up"></i>
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

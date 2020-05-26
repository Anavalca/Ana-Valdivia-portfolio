import React from 'react';
import IconMail from '../icons/mail.png';
import IconLinkedin from '../icons/linkedin.png';
import IconGithub from '../icons/github.png';
import IconTwitter from '../icons/twitter.png';

const Main = (props) => {
    console.log(props)
    return (
        <main className='wrapperMain'>
            <div className='titleContainer'>
                <div className='keyboard'>
                    <div className='h'>
                        <span>H</span>
                    </div>
                    <div className='e'>
                        <span>E</span>
                    </div>
                    <div className='l'>
                        <span>L</span>
                    </div>
                    <div className='l2'>
                        <span>L</span>
                    </div>
                    <div className='o'>
                        <span>O</span>
                    </div>
                </div>
                <div className='subtitle'> I´m Ana Valdivia. Frontend Developer</div>
            </div>
            <div className='iconsRRSS'>
                <a title='email' href="mailto:avc92j@gmail.com" target='blank'>
                    <img className='iconMail' alt='icon Email' src={IconMail} />
                </a>
                <a title='linkedin' href='https://www.linkedin.com/in/anavaldiviacano/' target='blank'>
                    <img className='iconLinkedin' alt='icon linkedin' src={IconLinkedin} />
                </a>
                <a title='github' href='https://github.com/Anavalca' target='blank'>
                    <img className='iconGithub' alt='icon github' src={IconGithub} />
                </a>
                <a title='twitter' href='https://twitter.com/Anita_amarillo' target='blank'>
                    <img className='iconTwitter' alt='icon twitter' src={IconTwitter} />
                </a>
            </div>
            <span className="scrollIcon">
                {/* <a href="#"> */}
                <span className="mouse">
                    <span>
                    </span>
                </span>
                {/* </a> */}
                <p>scroll me</p>
            </span>
        </main>
    )
}

export default Main;
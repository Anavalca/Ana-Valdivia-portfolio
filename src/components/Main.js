import React from 'react';

const Project = (props) => {
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
            <span class="scrollIcon">
                {/* <a href="#"> */}
                <span class="mouse">
                    <span>
                    </span>
                </span>
                {/* </a> */}
                <p>scroll me</p>
            </span>
        </main>
    )
}

export default Project;
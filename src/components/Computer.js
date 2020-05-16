import React from 'react';

const Computer = () => {
    return (
        <div className='computerWrapper'>
            <div className='computer'>
                <circle className='circleComputer'></circle>
                <div className='computerScreen'>
                    <div className='screen'></div>
                </div>
            </div>
            <div className='baseComputer'></div>
            <div className='baseComputerBottom'></div>
        </div >
    )
}

export default Computer;
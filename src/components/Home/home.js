import React from 'react';
import Year from './year';

const Home = () => {
    return (
        <div>
            <div>
                <h1>IITH Books Rating System</h1>
            </div>
            {/*horizontal list of buttons */}
            <div className='branch-div'>
                <button className='branch-button'>CSE</button>
                <button className='branch-button'>ECE</button>
                <button className='branch-button'>ME</button>
                <button className='branch-button'>CE</button>
                <button className='branch-button'>EEE</button>
                <button className='branch-button'>BSBE</button>
                <button className='branch-button'>CL</button>
                <button className='branch-button'>CH</button>
                <button className='branch-button'>DESIGN</button>
                <button className='branch-button'>MATERIALS</button>
                <button className='branch-button'>PHY</button>
                <button className='branch-button'>CHEM</button>
                <button className='branch-button'>MATHS</button>
                <button className='branch-button'>LIBRARY</button>
                <button className='branch-button'>OTHERS</button>

            </div>

            <Year />
            
        </div>
    );
}

export default Home;

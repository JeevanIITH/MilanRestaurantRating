import React from 'react';

const Year = () => {
    return (
        <div>
            {/*button list of years from 1 to 4 on click it will pass to parent */}
            <div className='year-div'>
                <button className='year-button'>1st Year</button>
                <button className='year-button'>2nd Year</button>
                <button className='year-button'>3rd Year</button>
                <button className='year-button'>4th Year</button>
            </div>
        </div>
    );
}

export default Year;

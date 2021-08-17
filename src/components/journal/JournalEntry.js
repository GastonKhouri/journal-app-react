import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{ 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url(https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Hola como estas Hola como estas Hola como estas Hola como estas Hola como estas
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>24</h4>
            </div>

        </div>
    )
}

export default JournalEntry

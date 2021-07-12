import React, { FC } from 'react'

const ShowItem: FC<any> = ({ show }) => {
    console.log('show', show.show);
    return (
        <div className="music-link" >
            <p style={{fontSize: '12px'}}>
                {show.date}  
            </p>
            <p style={{fontSize: '10px'}}>
                {show.venue}
            </p>
        </div>
    )
}

export default ShowItem

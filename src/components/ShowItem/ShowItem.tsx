import React, { FC } from 'react'
import { IShow } from '../../shared/interfaces'
interface IShowItem {
    show: IShow
}

const ShowItem: FC<IShowItem> = ({ show }) => {
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

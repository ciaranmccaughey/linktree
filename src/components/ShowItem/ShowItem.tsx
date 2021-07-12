import React, { FC } from 'react'
import { IShow } from '../../shared/interfaces'
interface IShowItem {
    show: IShow
}

const ShowItem: FC<IShowItem> = ({ show }) => {
    return (
        <div className="music-link" >
            <p style={{fontWeight: 600, margin: 0}}>
                {show.date}  
            </p>
            <p style={{fontWeight: 400, margin: 0, fontSize: '11px'}}>
                {show.venue}
            </p>
        </div>
    )
}

export default ShowItem

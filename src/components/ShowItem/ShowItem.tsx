import React, { FC } from 'react'
import { IShow } from '../../shared/interfaces'
interface IShowItem {
    show: IShow
}

const ShowItem: FC<IShowItem> = ({ show }) => {
    return (
        <div className="music-link" >
            <div >
                <div style={{fontWeight: 600, margin: 0}}>
                    {show.date}  
                </div>
                <div style={{fontWeight: 400, margin: 0, fontSize: '11px'}}>
                    {show.venue}
                </div>
            </div>

            <div style={{fontWeight: 400, margin: 0, fontSize: '11px'}}>
                {show.ticketsAvailable ? 'Buy Tickets' : 'Sold Out' }
            </div>

        </div>
    )
}

export default ShowItem

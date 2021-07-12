import React, { FC } from 'react'
import { IShow } from '../../shared/interfaces'

// TODO: add a ShowItem css and move styles to this file
interface IShowItem {
    show: IShow;
    onSecondaryLinkClicked(show: any): void
}

const ShowItem: FC<IShowItem> = ({ show , onSecondaryLinkClicked }) => {

    const styles = {fontWeight: 400, margin: 0, fontSize: '11px'};

    return (
        <div data-testid="show-element" className="music-link" onClick={() => onSecondaryLinkClicked(show)} >
            <div >
                <div style={{fontWeight: 600, margin: 0}}>
                    {show.date}  
                </div>
                <div style={styles}>
                    {show.venue}, {show.city}
                </div>
            </div>

            <div style={styles}>
                {show.ticketsAvailable ? 'Buy Tickets' : 'Sold Out' }
            </div>

        </div>
    )
}

export default ShowItem

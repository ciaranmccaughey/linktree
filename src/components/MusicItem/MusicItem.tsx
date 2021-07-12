import React, { FC } from 'react'
import { IPlatform } from '../../shared/interfaces'

interface IMusicItem {
    platform: IPlatform
}

const MusicItem: FC<IMusicItem> = ({ platform }) => {

    const onLinkClicked = () => {
        // open link in new tab
        const myWindow = window.open(platform.url, '_blank');
        if (myWindow) {
            myWindow.focus();
        }
    }
    
    return (
        <div className="music-link" onClick={() => onLinkClicked()}>
            {platform.name}
        </div>
    )
}

export default MusicItem

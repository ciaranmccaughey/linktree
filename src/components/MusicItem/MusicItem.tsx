import React, { FC } from 'react'
import { IPlatform } from '../../shared/interfaces'

interface IMusicItem {
    platform: IPlatform;
    onSecondaryLinkClicked(platform: any): void;
}

const MusicItem: FC<IMusicItem> = ({ platform, onSecondaryLinkClicked }) => {
    
    return (
        <div className="music-link" >
            <platform.icon style={{width: "20px"}} onClick={() => onSecondaryLinkClicked(platform)} />
            <p onClick={() => onSecondaryLinkClicked(platform)}>{platform.name}</p>
        </div>
    )
}

export default MusicItem

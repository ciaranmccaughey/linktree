import React, { FC } from 'react'
import { IPlatform } from '../../shared/interfaces'

interface IMusicItem {
    platform: IPlatform;
    onSecondaryLinkClicked(platform: any): void;
}

const MusicItem: FC<IMusicItem> = ({ platform, onSecondaryLinkClicked }) => {
    
    return (
        <div className="music-link" onClick={() => onSecondaryLinkClicked(platform)}>
            <platform.icon style={{width: "20px"}} />
            {platform.name}
        </div>
    )
}

export default MusicItem

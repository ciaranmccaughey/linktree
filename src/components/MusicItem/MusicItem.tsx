import React, { FC } from 'react'

const MusicItem: FC<any> = ({ platform }) => {
    console.log('here', platform)
    return (
        <div className="music-link">
            {platform.name}
        </div>
    )
}

export default MusicItem

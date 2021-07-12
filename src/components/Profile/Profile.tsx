import React, { FC } from 'react'
import { IProfile } from '../../shared/interfaces'

interface IProfileProps {
    profile: IProfile
}

export const Profile: FC<IProfileProps> = ({ profile }) => {
    return (
        <div className="profile-container">
            <img src={profile.imgUrl} style={{borderRadius: '50%', width: '100px'}}
            ></img>
            <p>@{profile.username}</p>
        </div>
    )
}

import React, { FC } from 'react'

export const Profile: FC<any> = ({ profile }) => {
    return (
        <div>
            <img src={profile.imgUrl}
            style={{borderRadius: '50%', width: '100px'}}
            ></img>
            <p>@{profile.username}</p>
        </div>
    )
}

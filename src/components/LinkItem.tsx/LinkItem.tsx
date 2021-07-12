import React, { FC, useState } from 'react'
import MusicItem from '../MusicItem/MusicItem';

export const LinkItem: FC<any> = ({ link }) => {

    const [showAdditional, setShowAdditional] = useState(false);

    const onLinkClicked = () => {
        // basked on the link type, perform different actions
        if (link.type === 'link') {
            const myWindow = window.open(link.url, '_blank');
            if (myWindow) {
                myWindow.focus();
            }
        } else if(link.type === 'music') {
            setShowAdditional(!showAdditional);
        }

    }

    return (
        <>
            <p className="link" onClick={onLinkClicked}>
                {link.title}  
            </p>
            {showAdditional && link.platforms && link.platforms.map((platform:any) => <MusicItem platform={platform} />)}
        </>
    )
}

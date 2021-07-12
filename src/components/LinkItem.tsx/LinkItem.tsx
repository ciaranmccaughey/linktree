import React, { FC, useState } from 'react'
import MusicItem from '../MusicItem/MusicItem';
import ShowItem from '../ShowItem/ShowItem';

export const LinkItem: FC<any> = ({ link }) => {
    console.log(link);
    const [showMusic, setShowMusic] = useState(false);
    const [showShows, setShowShows] = useState(false);

    const onLinkClicked = () => {
        // basked on the link type, perform different actions
        if (link.type === 'link') {
            const myWindow = window.open(link.url, '_blank');
            if (myWindow) {
                myWindow.focus();
            }
        } else if(link.type === 'music') {
            setShowMusic(!showMusic);
            setShowShows(false);
        } else if(link.type === 'show') {
            setShowMusic(false);
            setShowShows(!showShows);
        }

    }

    return (
        <>
            <p className="link" onClick={onLinkClicked}>
                {link.title}  
            </p>
            {showMusic && link.platforms && link.platforms.map((platform:any) => <MusicItem platform={platform} />)}
            {showShows && link.shows && link.shows.map((show:any) => <ShowItem show={show} />)}
        </>
    )
}

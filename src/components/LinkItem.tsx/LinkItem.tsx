import React, { FC, useState } from 'react'
import MusicItem from '../MusicItem/MusicItem';
import ShowItem from '../ShowItem/ShowItem';

export const LinkItem: FC<any> = ({ link, onLinkClicked, showMusic, showShows }) => {

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

import React, { FC, useState } from 'react'
import useSettings from '../../hooks/useSettings';
import MusicItem from '../MusicItem/MusicItem';
import ShowItem from '../ShowItem/ShowItem';

export const LinkItem: FC<any> = ({ link, onLinkClicked, showMusic, showShows }) => {

    const { settings } = useSettings();
    const [btnColour, setBtnColour] = useState(settings.primaryColour);

    return (
        <>
            <p className="link" onClick={onLinkClicked} style={{backgroundColor: btnColour}} onMouseEnter={() => setBtnColour(settings.hoverColour)} onMouseLeave={() => setBtnColour(settings.primaryColour)}>
                {link.title}  
            </p>
            {showMusic && link.platforms && link.platforms.map((platform:any) => <MusicItem platform={platform} />)}
            {showShows && link.shows && link.shows.map((show:any) => <ShowItem show={show} />)}
        </>
    )
}

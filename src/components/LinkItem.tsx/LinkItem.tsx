import React, { FC, useState } from 'react'
import useSettings from '../../hooks/useSettings';
import { ILink } from '../../shared/interfaces';
import MusicItem from '../MusicItem/MusicItem';
import ShowItem from '../ShowItem/ShowItem';

interface ILinkItem {
    link: ILink;
    onLinkClicked(): any;
    showMusic: boolean;
    showShows: boolean;
}

export const LinkItem: FC<ILinkItem> = ({ link, onLinkClicked, showMusic, showShows }) => {

    const { settings } = useSettings();
    const [btnColour, setBtnColour] = useState(settings.primaryColour);

    const onSecondaryLinkClicked = (item: {url: string}) => {
        // open link in new tab
        const myWindow = window.open(item.url, '_blank');
        if (myWindow) {
            myWindow.focus();
        }
    }

    return (
        <>
            <div className="link" onClick={onLinkClicked} style={{backgroundColor: btnColour}} onMouseEnter={() => setBtnColour(settings.hoverColour)} onMouseLeave={() => setBtnColour(settings.primaryColour)}>
                {link.title}  
            </div>
            {showMusic && link.platforms && link.platforms.map((platform:any) => <MusicItem key={platform.name} platform={platform} onSecondaryLinkClicked={onSecondaryLinkClicked} />)}
            {showShows && link.shows && link.shows.map((show:any) => <ShowItem key={show.date} show={show} onSecondaryLinkClicked={onSecondaryLinkClicked}/>)}
        </>
    )
}

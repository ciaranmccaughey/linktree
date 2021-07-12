import React, { useState } from 'react'
import { LinkItem } from '../LinkItem.tsx/LinkItem'

const links = [
    {url: 'https://linktr.ee/', title: 'My First Link', type: 'link'},
    {url: '', title: 'My Second Link', type: 'link'},
    {url: '', title: 'My Third Link', type: 'link'},
    {url: '', title: 'New Album', type: 'music',
        song: {artist: 'Kings Of Leon', name: 'Milk'},
        platforms: [
            {name: 'Spotify', url: ''},
            {name: 'Apple', url: ''},
            {name: 'SoundCloud', url: ''}
        ]
    },
    {url: '', title: 'Australia Tour', type: 'show',
        song: {artist: 'Kings Of Leon', name: 'Milk'},
        shows: [
            {venue: 'Fortitude Music Hall', city: 'Brisbane', date: 'Aug 01, 2021', url: '', ticketsAvailable: true},
            {venue: 'The Night Cat', city: 'Melbourne', date: 'Aug 01, 2021', url: '', ticketsAvailable: true},
            {venue: 'Factory Theatre', city: 'Sydney', date: 'Aug 01, 2021', url: '', ticketsAvailable: true}
        ]
    },
]

const Links = () => {

    const [showMusic, setShowMusic] = useState(false);
    const [showShows, setShowShows] = useState(false);

    const onLinkClicked = (link: any) => {
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
        <div>
            {links.map(link => <LinkItem onLinkClicked={() => onLinkClicked(link)} link={link} showMusic={showMusic} showShows={showShows} />)}
        </div>
    )
}

export default Links

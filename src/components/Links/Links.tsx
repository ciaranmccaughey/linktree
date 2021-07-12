import React, { useState } from 'react'
import { LinkTypes } from '../../shared/interfaces'
import { LinkItem } from '../LinkItem.tsx/LinkItem'
import { ReactComponent as SpotifyIcon } from '../../assets/icons/spotify.svg';
import { ReactComponent as AppleIcon } from '../../assets/icons/apple-music.svg';
import { ReactComponent as SoundCloudIcon } from '../../assets/icons/soundcloud.svg';
  
const links = [
    {url: 'https://linktr.ee/', title: 'My First Link', type: LinkTypes.link},
    {url: 'https://blog.linktr.ee/', title: 'My Second Link', type: LinkTypes.link},
    {url: 'https://linktr.ee/s/pricing/', title: 'My Third Link', type: LinkTypes.link},
    {url: '123', title: 'New Album', type: LinkTypes.music,
        song: {artist: 'Kings Of Leon', name: 'Milk'},
        platforms: [
            {icon: SpotifyIcon, name: 'Spotify', url: 'https://open.spotify.com/track/6DDRD4QGsEsA9YaIQzm4BO'},
            {icon: AppleIcon, name: 'Apple', url: ''},
            {icon: SoundCloudIcon, name: 'SoundCloud', url: ''}
        ]
    },
    {url: '1234', title: 'Australia Tour', type: LinkTypes.show,
        shows: [
            {venue: 'Fortitude Music Hall', city: 'Brisbane', date: 'Aug 01, 2021', url: 'https://www.ticketmaster.com.au/kings-of-leon-tickets/artist/862453', ticketsAvailable: true},
            {venue: 'The Night Cat', city: 'Melbourne', date: 'Aug 02, 2021', url: '', ticketsAvailable: false},
            {venue: 'Factory Theatre', city: 'Sydney', date: 'Aug 03, 2021', url: '', ticketsAvailable: true}
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
            {links.map(link => <LinkItem key={link.url} onLinkClicked={() => onLinkClicked(link)} link={link} showMusic={showMusic} showShows={showShows} />)}
        </div>
    )
}

export default Links

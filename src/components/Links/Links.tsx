import React from 'react'
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
    return (
        <div>
            {links.map(link => <LinkItem link={link} />)}
        </div>
    )
}

export default Links

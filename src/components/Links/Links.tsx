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
]

const Links = () => {
    return (
        <div>
            {links.map(link => <LinkItem link={link} />)}
        </div>
    )
}

export default Links

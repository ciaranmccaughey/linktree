import React from 'react'
import { LinkItem } from '../LinkItem.tsx/LinkItem'

const links = [
    {url: 'https://linktr.ee/', title: 'My First Link', type: 'link'},
    {url: '', title: 'My Second Link', type: 'link'},
    {url: '', title: 'My Third Link', type: 'link'},
]

const Links = () => {
    return (
        <ul>
            {links.map(link => <LinkItem link={link} />)}
        </ul>
    )
}

export default Links

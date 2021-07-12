import React, { FC } from 'react'

export const LinkItem: FC<any> = ({ link }) => {

    const onLinkClicked = () => {
        const myWindow = window.open(link.url, '_blank');
        if (myWindow) {
            myWindow.focus(); // okay now
        }

    }
    return (
        <li className="link" onClick={onLinkClicked}>
            {link.title}  
        </li>
    )
}

import React, { FC } from 'react'

export const LinkItem: FC<any> = ({ link }) => {
    return (
        <li className="link" >
            {link.title}  
        </li>
    )
}

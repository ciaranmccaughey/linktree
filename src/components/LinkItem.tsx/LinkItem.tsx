import React, { FC } from 'react'

export const LinkItem: FC<any> = ({ link }) => {
    return (
        <li>
            {link.title}  
        </li>
    )
}

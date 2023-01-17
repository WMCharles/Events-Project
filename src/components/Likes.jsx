import LikedEvents from './LikedEvents'
import HeroLikes from './HeroLikes'
import React from 'react'

export default function Likes({ likes }) {
    return (
        <div>
            <HeroLikes />
            <LikedEvents Events={likes}/>
        </div>
    )
}

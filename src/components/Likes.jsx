import LikedEvents from './LikedEvents'
import HeroLikes from './HeroLikes'
import React from 'react'

export default function Likes({ likes, user }) {
    return (
        <div>
            <HeroLikes />
            <LikedEvents likes={likes} user={user}/>
        </div>
    )
}

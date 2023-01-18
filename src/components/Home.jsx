import React from 'react'
import HeroHome from './HeroHome'
import Events from './Events'

export default function Home({ events, loading }) {
    return (
        <div>
            <HeroHome />
            <Events events={events} loading={loading}/>
        </div>
    )
}

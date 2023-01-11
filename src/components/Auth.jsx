import React, { useState } from 'react'
import Login from './Login'
import SignupForm from './Signup'

export default function Auth() {

    const [login, setLogin] = useState(true)

    function handleClick(e) {
        e.preventDefault()
        setLogin(!login)
    }

    return (
        <div>
            {login ? <Login handleClick={handleClick}  /> : <SignupForm handleClick={handleClick} />}
        </div>
    )
}

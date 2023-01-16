import React, { useState } from 'react'
import LoginV1 from './LoginV1'
import Register from './Register'
// import Login from './Login'
// import SignupForm from './Signup'

export default function Auth({onLogin}) {

    const [login, setLogin] = useState(true)

    function handleClick(e) {
        e.preventDefault()
        setLogin(!login)
    }

    return (
        <div>
            {login ? <LoginV1 handleClick={handleClick}  onLogin={onLogin}/> : <Register handleClick={handleClick} onLogin={onLogin}/>}
        </div>
    )
}

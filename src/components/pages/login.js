import React from 'react'
import './style.css';
import {auth, provider} from '../../config'
import {Link, useHistory} from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'
import { Button } from 'react-bootstrap';


export default function Login() {   
    
    let history = useHistory()

    let Authenticated = false
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("Authenticated",true)
            Authenticated = true
            history.push('/')
            window.location.reload()
            const email = result._tokenResponse.email
            localStorage.setItem("email",email)

        })
    }
    
    return (
        <div className="login">
            <h1>SIGN IN</h1>
            <Button onClick={signInWithGoogle} variant="info">Sign In With Google</Button>
        </div>
    )
}


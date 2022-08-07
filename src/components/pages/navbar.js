import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'
import "./style.css"


export default function Navbar() {
    let authenticated = localStorage.getItem("Authenticated")
    const signUserOut = () =>{
        signOut(auth).then(()=>{
        localStorage.clear()
        authenticated = false
        window.location.pathname = "/login"
    })
    }
    return (  
          <nav>
          <div class="nav-wrapper black">
            <Link to="/" id="title">Donate Your Clothes</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/get-clothes">Get Clothes</Link></li>
                    <li>{authenticated ? <Link to="/donate-your-clothes">Donate Clothes</Link> : <Link to="/login-first">Donate Clothes</Link>}</li>
                    <li>{authenticated ? <Link to="/my-donation">My Donation</Link> : <Link to="/login-first">My Donation</Link>}</li>
                    <li><Link to="/about-us">Credits</Link></li>
                    <li>{!authenticated ? <Link to="/login">LOGIN</Link> : <button onClick={signUserOut} className="btn red">LOGOUT</button>}</li>
                </ul>
          </div>
        </nav>
    )
}

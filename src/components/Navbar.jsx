import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return (
        <div className='NavBar'>
            <Link to='/home' className='Section'> Home </Link>
            <Link to='/about' className='Section'> About </Link>
        </div>
    )
}

export default Navbar
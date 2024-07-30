import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>AjTech</div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
               <Link to={'/about'} className='nav-link'>About</Link> 
            </li>
            <li className='nav-item'>
               <Link to={'/contact'} className='nav-link'>Contact us</Link> 
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
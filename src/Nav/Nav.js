import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav_logo'>
            KD
        </div>
        <div className='nav_links'>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </div>        
    </div>
  )
}

export default Nav
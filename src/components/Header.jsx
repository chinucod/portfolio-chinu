import React from 'react'
import logo2 from '../images/logo2.png'
import logo1 from '../images/logo.png'
const Header = () => {
  return (
    <div className='fixed'>
    <div className='nav-bar'>
            <img src={logo2}/>
            <ul className='top'>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Links</li>
            </ul>
      </div>
      </div>
      
  )
}

export default Header
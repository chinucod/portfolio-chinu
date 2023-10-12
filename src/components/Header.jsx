import React from 'react'
import logo from '../images/Green_and_Black_Minimalist_Art_Brand_Logo-removebg-preview.png'
import logo1 from '../images/logo.png'
const Header = () => {
  return (
    <div className='nav-bar'>
            <img src={logo1}/>
            <ul className='top'>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Links</li>
            </ul>
      </div>
      
  )
}

export default Header
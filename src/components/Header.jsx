import React , { useState } from 'react'

import logo2 from '../images/logo2.png'
import close from "../images/close.png"
import menu from "../images/menu.png"
const Header = () => {
  const dropdown = document.querySelector('.nav-bar-res')
  const click = document.querySelector('.icon')
  const btn = document.querySelector('.btn')

  
  
 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div id='home'>
    <div className='fixed'>
    <div className='nav-bar'>
          <a href='#home'><img src={logo2}/></a>
            <ul className='top'>
              <li><a className='link' href='#me'>About</a></li>
              <li><a className='link' href='#skills'>Skills</a></li>
              <li><a className='link' href='#projects'>Projects</a></li>
              <li><a className='link' href='#footer'>Contact</a></li>
              <li><a href='../resume/Rajendra_prasad_resume.pdf' download>Resume</a></li>
        
            </ul>
              <div className='btn' onClick={toggleDropdown}><img className='icon' src={isOpen ? close : menu}/></div>
      </div>
      {isOpen &&
      <div className='nav-bar-res'>
              <li><a className='link' href='#me'>About</a></li>
              <li><a className='link' href='#skills'>Skills</a></li>
              <li><a className='link' href='#projects'>Projects</a></li>
              <li><a className='link' href='#footer'>Contact</a></li>
              <li><a href='../resume/Rajendra_prasad_resume.pdf' download>Download Resume</a></li>
      </div>}
      </div>
      </div>
      
  )
}

export default Header

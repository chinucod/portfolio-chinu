import React from 'react'
import logo2 from '../images/logo2.png'
const Header = () => {
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
      </div>
      </div>
      </div>
      
  )
}

export default Header
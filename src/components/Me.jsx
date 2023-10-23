import React from 'react'
import cv from '../images/cv.png'
import git from "../images/github.png"
import insta from "../images/insta.png"
import linked from "../images/linkedin.png"

const Me = () => {
  return (
    <div id="me">
    <div className='me'>
        <div className='about-me'>
            <p className="underline2">Hi, I'm</p>
            <p className='name'>Rajendra prasad</p>
            <p>Web Developer</p>
        </div>
        <div className='link'>
          <div className='link-img'>
            <a href='https://drive.google.com/file/d/1eQebH7LvLuiqb50RSU26FujGe_ss_fHV/view' target='_blank'><img src={cv}/></a>
          </div>
          <div className='link-img'>
            <a href='https://github.com/chinucod' target='_blank'><img src={git}/></a>
          </div>
          <div className='link-img'>
            <a href='https://instagram.com/chinu.07_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><img src={insta}/></a>
          </div>
          <div className='link-img'>
            <a href='https://www.linkedin.com/in/rajendra-prasad-r/' target='_blank'><img src={linked}/></a>
          </div>
        </div>
        <div className='about-chinu'>
            <h1>About</h1>
            <hr></hr>
            <p>Fullstack Web developer with a keen interest in all things web dev. Always learning, both in and out of work. Currently learning: Vue!</p>
        </div>
    </div>
    </div>
  )
}

export default Me
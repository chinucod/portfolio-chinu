import React from 'react'

import cv from '../images/cv.png'
import git from "../images/github.png"
import insta from "../images/insta.png"
import linked from "../images/linkedin.png"
const About = () => {
  return (
    <div className='about'>
        <div className='title'>
            <p className='underline'>Think Simple</p>
            <p>Design Simple</p>
        </div>
        <p className='q'>&lt;"You don't have to be 'a creative' to be creative."/&gt;</p>
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
    </div>
  )
}

export default About
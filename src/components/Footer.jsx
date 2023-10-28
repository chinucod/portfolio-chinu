import React, { useState } from 'react'
import mail from '../images/mail.png'
import call from '../images/call.png'
import cv from '../images/cv.png'
import git from "../images/github.png"
import insta from "../images/insta.png"
import linked from "../images/linkedin.png"
const Footer = () => {
  
  return (
    <div id='footer'>
    <div className='footer'>
        <div>
        <div className='foot'>
            <p>Connect with me</p>
            <hr></hr>
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
        <div className='contact'>
        
        <div className='connect'>
              <img src={mail}/>
              <a href="mailto:chintoramesh@gmail.com">chintoramesh@gmail.com</a>
            </div>
            <div className='connect'>
              <img src={call}/>
              <a href="tel:+91 7904925119">91+ 790-492-5119</a>
            </div>
            <div className='connect q'>
              <a href="" download>Download Resume</a>
            </div>
        
        </div>
        </div>
        <div className='form-class'>
            <form name='submit-to-google-sheet'>
              <input name='Name' className='in' type='text' placeholder='Name'></input>
              <input name='Email' className='in' type='text' placeholder='Email'></input>
              <textarea name='Message' className='txt' type='text' placeholder='Your Meassage'></textarea>
              <button className="btn" type='submit'>Send Message</button>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Footer

import React from 'react'
import mail from '../images/mail.png'
import call from '../images/call.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot'>
            <p>Connect with me</p>
            <hr></hr>
        </div>
        <div className='contact'>
        <div className='connect'>
              <img src={mail}/>
              <a href=''>chintoramesh@gmail.com</a>
            </div>
            <div className='connect'>
              <img src={call}/>
              <a href=''>91+ 790-492-5119</a>
            </div>
        </div>

    </div>
  )
}

export default Footer
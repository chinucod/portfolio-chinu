import React from 'react'
import arthi from '../images/arthi.png'
import login from '../images/login.png'
import tally from '../images/tally.png'
import view from '../images/view.png'
import github from '../images/github.png'
import resize from '../images/resize.png'
const Projects = () => {
  return (
    <div className='projects'>
        <div className='project'>
            <h1>Projects</h1>
            <hr></hr>
        </div>
        <div class="cards">
            <div class="card">
                <div className='image'>
                <img src={arthi}/>
                </div>
                <div className='heading'>
                    <h4>Arthi Shopping</h4>
                    <p>Shopping Web-Site</p>
                </div>
            </div>
            <div class="card">
                <div className='image'><img src={login}/></div>
                <div className='heading'>
                    <h4>Login Page</h4>
                    <p>Simple Login Page</p>
                </div>
            </div>
            <div class="card">
                <div className='image'><img src={tally}/></div>
                <div className='heading'>
                    <h4>Tally</h4>
                    <p>Automate backup</p>
                </div>
            </div>
            <div class="card">
                <div className='image'><img src={tally}/></div>
                    <div className='heading'>
                        <h4>Calculator</h4>
                        <p>Business Calculator</p>
                    </div>
            </div>
            <div class="card">
                <div className='image'><img src={resize}/></div>
                    <div className='heading'>
                        <h4>Resize</h4>
                        <p>Image Resize</p>
                    </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Projects
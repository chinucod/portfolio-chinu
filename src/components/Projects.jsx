import React from 'react'
import arthi from '../images/arthi.png'
import login from '../images/login.png'
import tally from '../images/tally.png'
import view from '../images/view.png'
import github from '../images/github.png'
import resize from '../images/resize.png'
import portfolio from '../images/portfolio.png'
const Projects = () => {
  return (
    <div id="projects">
    <div className='projects'>
        <div className='project'>
            <h1>Projects</h1>
            <hr></hr>
        </div>
        <div class="cards">
            <div class="card">
                <div className='image'>
                <a href='https://arthi-home.netlify.app/'  target='_blank'><img src={arthi}/></a>
                </div>
                <div className='heading'>
                    <h4>Arthi Shopping</h4>
                    <p>Shopping Web-Site</p>
                    <div className='redirect'>
                    <a href='https://github.com/chinucod/arthi_shop' target='_blank'><img src={github}/></a>
                    <a href='https://arthi-home.netlify.app/' target='_blank'><img src={view}/></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className='image'>
                <a href='https://rajendra-prasad.netlify.app/' target='_blank'><img src={login}/></a></div>
                <div className='heading'>
                    <h4>Login Page</h4>
                    <p>Simple Login Page</p>
                    <div className='redirect'>
                    <a href='https://github.com/chinucod/loginpage' target='_blank'><img src={github}/></a>
                    <a href='https://rajendra-prasad.netlify.app/' target='_blank'><img src={view}/></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className='image'><img src={tally}/></div>
                <div className='heading'>
                    <h4>Tally</h4>
                    <p>Automate backup</p>
                    <div className='redirect'>
                    <a href='https://github.com/chinucod/Tally_Backup_code/blob/main/backup.py' target='_blank'><img src={github}/></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className='image'><img src={tally}/></div>
                    <div className='heading'>
                        <h4>Calculator</h4>
                        <p>Business Calculator</p>
                        <div className='redirect'>
                        <a href='https://github.com/chinucod/Tally_Backup_code/blob/main/calculator.py' target='_blank'><img src={github}/></a>
                        
                        </div>
                    </div>
            </div>
            <div class="card">
                <div className='image'>
                <a href='https://resize-rajendra-prasad.netlify.app/' target='_blank'><img className='img2' src={resize}/></a>
                </div>
                    <div className='heading'>
                        <h4>Resize</h4>
                        <p>Image Resize</p>
                        <div className='redirect'>
                        <a href='https://github.com/chinucod/image_resize/tree/main/img_com_app' target='_blank'><img src={github}/></a>
                        <a href='https://resize-rajendra-prasad.netlify.app/' target='_blank'><img className='img2' src={view}/></a>
                        </div>
                    </div>
            </div>
            <div class="card">
                <div className='image'><img src={portfolio}/></div>
                    <div className='heading'>
                        <h4>Portfolio</h4>
                        <p>Portfolio-Site</p>
                        <div className='redirect'>
                        <a href='https://github.com/chinucod/image_resize/tree/main/img_com_app' target='_blank'><img src={github}/></a>
                        <a href='https://resize-rajendra-prasad.netlify.app/' target='_blank'><img className='img2' src={view}/></a>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Projects

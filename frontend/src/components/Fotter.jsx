import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import React from 'react';
import { Link } from 'react-router-dom';

export const Fotter = () => {

    
    return (
        <div className='footter'>
            <div className="container  ">
                <footer className="py-2">
                    <h5>Section</h5>
                    <div className="row" >
                        <div className="col-6 col-md-2 mb-3">

                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-light " >Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-light">About</Link></li>
                                <li className="nav-item mb-2"><Link to='/getAllBlogs' className="nav-link p-0 text-body-light">explore</Link></li>

                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">

                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to='/login' className="nav-link p-0 text-body-light">Login</Link></li>
                                <li className="nav-item mb-2"><Link to='/signup' className="nav-link p-0 text-body-light">SignUp</Link></li>
                                <li className="nav-item mb-2"><Link to='/getAllBlogs' className="nav-link p-0 text-body-light">Blogs</Link></li>

                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/termofuse" className="nav-link p-0 text-body-light">Term of use</Link></li>
                                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-light">Contact us</Link></li>

                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            
                                <h5>Join our journey</h5>
                                <p>Be a part of our community</p>
                                <form action='mailto:sourabhkuriyal77@gmail.com' className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Contact us</label>
                                    <input id="newsletter1" type="text" className="form-control" name='subject' placeholder="write here" fdprocessedid="jfwfae" />
                                    <button className="btn btn-primary" type="submit" fdprocessedid="eagnld"  >Send</button>
                                </form>
                            
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><Link to={'https://github.com/saurabhkuriyal'} className='text-white'><GitHubIcon/></Link></li>
                            <li className="ms-3"><Link to={"https://www.linkedin.com/in/saurabh-kuriyal-075a95238"} className='text-white'><LinkedInIcon/></Link></li>
                            <li className="ms-3"><Link to={"https://twitter.com/Kuriyal7?t=BaAIukQLMir2naywwN2VcQ&s=09"} className='text-white'><XIcon/></Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

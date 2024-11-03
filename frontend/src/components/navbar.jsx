import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

function Navbar() {

    const userImage=useSelector((state)=>state.user.userImageURL);
    const username=useSelector((state)=>state.user.name);
    return <div>

        <header className="p-3 mb-3 nav-bar border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32" role="img" ></svg> */}
                        <TipsAndUpdatesIcon  className='m-2 text-white'/>
                        <p className='navbarVercelStyle'><em>Community.</em><span>Dev</span></p>
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 text-light link-secondary"><HomeIcon/>Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-light link-body-emphasis"><WorkspacesIcon/>About</NavLink></li>
                        <li><NavLink to="/getAllBlogs" className="nav-link px-2 text-light link-body-emphasis"><ExploreIcon/>Explore</NavLink></li>
                        <li><NavLink to="/add/blog" className="nav-link px-2 text-light link-body-emphasis"><DriveFileRenameOutlineIcon/>Write Something</NavLink></li>
                        <li><NavLink to='/dashboardredirects' className="nav-link px-2 text-light link-body-emphasis"><DashboardIcon/>Dashboard</NavLink></li>
                        <li><NavLink to='/user/layout/bookmarks' className="nav-link px-2 text-light link-body-emphasis"><BookmarkIcon/>Bookmarks</NavLink></li>
                    </ul>

                    <form className="col-12 align-items-center justify-content-center col-lg-auto mb-3 mb-lg-0 me-lg-3 section" role="search">
                        {/* <input type="search" className="form-control" placeholder="Search..." aria-label="Search" /> */}
                        
                        <NavLink to="/user/profile" className="d-block d-flex link-body-emphasis text-decoration-none text-decoration-noneVercel" data-bs-toggle="dropdown" aria-expanded="false">
                        {userImage?(<img src={userImage} alt="profile" width="32" height="32" className="rounded-circle " />):(<AccountCircleIcon className='text-white'/>)}
                        {username?(<p className='text-white'>{username}</p>):(<p className='text-white'>Guest</p>)}
                        </NavLink>

                        {/* //it is for button */}
                        {username?(<NavLink to='/dashboardredirects'><button type="button" className="btn btn-warning">Dash</button></NavLink>):
                        <NavLink className="dropdown-item" to="/login"><button type="button" className="btn btn-primary">Sign in</button></NavLink>}
                    </form>

                    
                        
                        
                    
                </div>
            </div>
        </header>
    </div>
}

export default Navbar;



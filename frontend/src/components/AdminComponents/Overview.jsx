import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { userlogout } from '../../feature/handleApi/tokenSlice';
import { deleteUser } from "../../feature/handleApi/userSlice";

export default function Overview() {

    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.name);
    const userImage = useSelector((state) => state.user.userImageURL);

    function handleClick() {
        dispatch(userlogout())
        dispatch(deleteUser());
    }

    return (
        <div className='container'>
            <div className="row m-3">
                <div className='col-sm'>
                    <em>Admin Dashboard</em>
                    <h1 className='m-3'>Welcome <span>{username}</span><br />
                        {userImage ? (<img src={userImage} alt="profile" width="70" height="70" className="rounded-circle m-3" />) : (<AccountCircleIcon />)}
                    </h1>
                </div>
                <div className='col-sm'>
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">All Posts</h5>
                            <p className="card-text">Delete,Edit and do many on things just click on it</p>
                            <Link to={'/admin/dashboard/post'} className="btn btn-primary">Button</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-3">
                <div className='col-sm-6 dashboardCard'>
                    <div className="card bg-dark text-white dashboardCard">
                        <img className="card-img" src="/graph3.jpg" alt="Card image" />
                        <div className="card-img-overlay">
                            <h5 className="card-title text-warning" >Hey {username}</h5>
                            <p className="card-text text-warning">Control activities of users and posts from here</p>

                        </div>
                    </div>

                </div>

                <div className='col-sm-6 g-3'>
                    <div className="card bg-dark text-white dashboardCard">
                        <img className="card-img card-imgVercel" src="/growth.jpeg" alt="Card image" />
                        <div className="card-img-overlay card-img-overlayVercel " >
                            <h5 className="card-title text-dark" >Hello</h5>
                            <p className="card-text" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>

                    <div className="button m-1">
                        <button type="button" onClick={handleClick} className="btn btn-primary btn-lg btn-block w-100">Click here to Logout <LogoutIcon className='m-2' /></button>
                    </div>

                </div>
            </div>


        </div>
    )
}

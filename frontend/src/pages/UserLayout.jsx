import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div className='container m-2'>
        <div className='topNavbar d-flex gap-2 mb-2'>
        <div className='col-6'>
        <Link  to={'/user/layout/dashboard'}><button type="button" className="btn btn-outline-info w-100">Post Control</button></Link>
        </div>
        <div className='col-6'>
        <Link to={'/user/layout/bookmarks'}><button type="button" className="btn btn-outline-info w-100">Bookmarks</button></Link>
        </div>
        </div>

        <div className="content container">
            <Outlet/>
        </div>
    </div>
  )
}

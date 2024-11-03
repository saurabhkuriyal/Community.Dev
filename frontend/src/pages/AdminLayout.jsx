import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/AdminComponents/Sidebar';

export default function AdminLayout() {
    return (
        <div  className="d-flex container"> 
        
            <div className="sidebar w-30">
            <Sidebar />
            </div>

            {/* content */}
            <div className='content w-60 contentVercel' >
            <Outlet/>
            </div>
        </div>
    )
}

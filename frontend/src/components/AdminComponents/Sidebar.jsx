import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CategoryIcon from '@mui/icons-material/Category';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu
} from 'cdbreact';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { userlogout } from '../../feature/handleApi/tokenSlice';
import { deleteUser } from '../../feature/handleApi/userSlice';

function Sidebar() {

    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.name);

    function handleClick() {
        dispatch(userlogout())
        dispatch(deleteUser());
    }
    return (
        <CDBSidebar>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <div className="items itemsVercel">
                        <Link to={'/admin/dashboard/post'}><DynamicFeedIcon />User Posts</Link>
                        <Link to={'/admin/dashboard/users'}><PeopleAltIcon />Users Info</Link>
                        <Link to={'/admin/dashboard/newsletter'}><FeedIcon />Newsletters</Link>
                        <Link to={'/admin/dashboard/messages'}><EmailIcon />Messages</Link>
                        <Link to={'/underdevelopment'}><CardMembershipIcon />Premium Members</Link>
                        <Link to={'/underdevelopment'}><CategoryIcon />Our Products</Link>
                        <Link to={'/underdevelopment'}><RemoveCircleIcon />Removed Posts</Link>

                    </div>


                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px' }}
                >
                    <p onClick={handleClick}><LogoutIcon /> Logout</p>
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default Sidebar;
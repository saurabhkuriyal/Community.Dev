import React from 'react';
import { useSelector } from 'react-redux'; // or wherever you're storing user info
import { useNavigate } from 'react-router-dom';


const DashboardRedirect = () => {
    const navigate = useNavigate();
    const userRole = useSelector((state) => state.user.userType); // Adjust based on your state structure
    console.log("Print userRole",userRole);

    React.useEffect(() => {
        if (userRole === 'admin') {
            navigate('/admin/dashboard'); // Redirect to admin dashboard
        } else if (userRole === 'customer') {
            navigate('/user/layout'); // Redirect to user dashboard
        } else {
            navigate('/login'); // Redirect to login if role is not recognized
        }
    }, [userRole, navigate]);

    return null; // This component doesn't need to render anything
};

export default DashboardRedirect;

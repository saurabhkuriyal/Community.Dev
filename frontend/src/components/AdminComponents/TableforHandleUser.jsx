import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

export default function TableforHandleUser(props) {


    
    return (
        <div className='table' >

        <table className="table table-dark table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"><PersonIcon/></th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Admin</th>
                        <th scope="col">Email</th>
                        <th scope="col">Verified</th>
                        <th scope="col">Premium member</th>
                        <th scope="col">Contact</th>

                    </tr>
                </thead>

                <tbody>
                {props.users.map((user)=>(
                    <tr key={user._id}>
                        <td>
                            <img src={user.userImage} width="30px" height="30px" alt="" />
                        </td>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            <p>{user.userType==="admin"?(<p>yes</p>):(<p>No</p>)}</p>
                        </td>
                        
                        <td>
                            <p>{user.email}</p>
                        </td>

                        <td>
                            <p>Verified</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                        <td>
                            <p>{user.mobileNo}</p>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CircularLoading from '../CircularLoading';
import TableforHandleUser from './TableforHandleUser';


export default function HandleUser() {
  const [loading, setLoading] = useState(false);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/getalluser`);
        //console.log(response);

        setUsers(response.data.user);
      } catch (error) {
        //console.log(error);
        //console.log(error.response.data);


      }finally {
        setLoading(false);
    }
    }
    fetchdata();
  }, [])

  console.log("Users are",users);
  

  return  (<div>
        {loading?(<CircularLoading/>):
  (
    <div className="text-bg">
      <TableforHandleUser
      users={users}
      />

    </div>
  )}
  </div>)
}

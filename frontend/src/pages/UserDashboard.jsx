import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useSelector } from "react-redux";
import CircularLoading from "../components/CircularLoading";
import TableForUser from '../components/TableForUser';

export default function UserDashboard() {

    const [loading, setLoading] = useState(false);
    let[post,setPost]=useState([]);
    const token=useSelector(state=>state.auth.token);
    
    //console.log("token is ",token);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/get/userpost`,
                        {
                headers:{
                    'x-access-token':token,
                },
            }
                );
                setPost(response.data.userPosts);
            } catch (error) {
                //console.log(error);

            }finally {
                setLoading(false);
            }
        }
        fetchdata();
    }, [])

    async function handleDelete(id){
        console.log("hello");
        
        try {
            const response=await axios.delete(`/delete/post/${id}`)
            setPost((prevPost)=>prevPost.filter((item)=>item._id !== id))
            
        } catch (error) {
           // console.log("Error is ",error);
           // console.log("this is",error.response.data);
            
        }
    }

    //console.log("there is array",post);
    

    return (<div>
        {loading?(<CircularLoading/>):
    (
        <div className="container UserDashboardVercel text-bg-dark" >
                <TableForUser  post={post}
                forDelete={handleDelete}
                />
        </div>
    )
    }
        </div>)
}

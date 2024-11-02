import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CircularLoading from '../CircularLoading';

import TableForAdmin from './TableForAdmin';


export default function HandlePost() {

    const [loading, setLoading] = useState(false);

    let[post,setPost]=useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/getallPost`);
                setPost(response.data);
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
            const response=await axios.delete(`http://localhost:3000/delete/post/${id}`)
            //console.log("This is post response",response);
            
            setPost((prevPost)=>prevPost.filter((item)=>item._id !== id))
            
        } catch (error) {
            //console.log("Error is ",error);
            //console.log("this is",error.response.data);
            
        }
    }

    return (<div>
        {loading?(<CircularLoading/>):
    (
        <div className="text-bg">
                <TableForAdmin 
                post={post}
                forDelete={handleDelete}
                />
            
        </div>
    )
        }
        </div>)
}

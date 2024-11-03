import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CircularLoading from '../components/CircularLoading';

export default function Bookmarks(props) {
    const id = useSelector((state) => state.user.userId);
    const [loading, setLoading] = useState(false);

    let [bookmarkItem, setBookmarkItem] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/get/bookmarks/${id}`)

               // console.log("This is response", response.data.bookmarks[0].postIds);


                //console.log("This is response from get bookmarks", response);


                setBookmarkItem(response.data.bookmarks[0].postIds);



            } catch (error) {
                //console.log(error);
                //console.log(error.response);


            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    async function handleDelete(postid) {
        try {
            console.log(postid, "here", id);
            const response = await axios.delete(`/delete/bookmark`, {
                params: {
                    postId: postid,
                    userId: id
                }
            })

           // console.log(response);
            //console.log(bookmarkItem);
            
            setBookmarkItem((prevValue) => prevValue.filter((item) => item._id != postid));

        } catch (error) {
            //console.log(error);
           // console.log(error.response.data);


        }

    }

    return (<div>
        {loading ? (<CircularLoading/>) :
            (
                <div className='container'>
                    <table className="table table-dark table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Post Image</th>
                                <th scope="col">Post Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {(bookmarkItem.map((bookmarkItem) =>
                                <tr key={bookmarkItem._id}>
                                    <td>
                                        <img src={bookmarkItem.postImage} width="30px" height="30px" alt="book image" />
                                    </td>
                                    <td>
                                        {bookmarkItem.title}
                                    </td>

                                    <td>
                                        <DeleteIcon onClick={() => handleDelete(bookmarkItem._id)} />
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}
    </div>)
}

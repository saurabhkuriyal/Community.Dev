import React from 'react';
import { Link } from 'react-router-dom';

export default function TableForUser(props) {
    
    return (
        <div className='table responsive-sm'>

        <table className="table table-dark table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Post</th>
                        <th scope="col">Post Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                {props.post.map((post)=>(
                    <tr key={post._id}>
                        <td>
                            <img src={post.postImage} width="30px" height="30px" alt="book image" />
                        </td>
                        <td>
                            {post.title}
                        </td>
                        <td>
                            {post.date}
                        </td>
                        <td>
                            {post.likes}
                        </td>
                        
                        <td><Link to={`/update/blog/${post._id}`} className="btn btn-warning w-75">EDIT</Link></td>
                        <td><button onClick={()=>props.forDelete(post._id)}
                        className="btn btn-danger w-80">Delete</button></td>
                        
                    </tr>
                ))}
                </tbody>
                </table>
        </div>
    )
}

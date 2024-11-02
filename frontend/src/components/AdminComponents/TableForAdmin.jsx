import React from 'react';

export default function TableForAdmin(props) {
    
    return (
        <div className='table-responsive-sm' >

        <table className="table table-dark table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Post</th>
                        <th scope="col">Post Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">stars</th>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
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
                        <td>
                            {post.author}
                        </td>
                        
                        <td><button onClick={()=>props.forDelete(post._id)}
                        className="btn btn-danger w-80">Delete</button></td>
                        
                    </tr>
                ))}
                </tbody>
                </table>
        </div>
    )
}

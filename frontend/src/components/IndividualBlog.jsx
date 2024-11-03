import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import parse from 'html-react-parser';
import React from 'react';

export default function IndividualBlog(props) {
  
  
  const content=parse(props.post.content.slice(0,150));
  return (
    <div>
      <div className="row m-0 g-3" key={props.post._id}>
                    <div className="col-md-4">
                        <img src={props.post.postImage} className="img-fluid img-fluidVercel " width="450" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.post.title}</h5>
                            {content}
                            <p><FavoriteBorderIcon className='text-danger'/>{props.post.likes}</p>
                            <em className='card-text'>by {props.post.author}</em>
                            <p className="card-text"><small className="text-body-secondary">{props.post.date}</small></p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

{/* <h1>{blog.title}</h1><br />
                    <p>{blog.content}</p><br />
                    <pre>{blog.author}</pre>
                    <p>{blog.date}</p> */}

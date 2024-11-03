import parse from 'html-react-parser';
import React from "react";
import { Link } from "react-router-dom";


export const BlogCard = (props) => {

    
    let content=parse(props.content.slice(0,175));
    
    return <>
        <div className="col cards p-4">
            <div className="">
                <img className="bd-placeholder-img card-img-top"  width="100%" height="400" src={props.image} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <div className="card-body" key={props.id}>
                    <h3>{props.title}</h3>
                {content}<p><Link to={`/specificblog/${props.id}`} >Read more</Link></p>
                    <em>by {props.author}</em>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div> */}
                        <small className="text-body-secondary"></small>
                    </div>
                </div>
            </div>
        </div>


    </>
}








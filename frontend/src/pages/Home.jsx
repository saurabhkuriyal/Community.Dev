import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCards";
import { Hero } from "../components/Hero";
import Price from "../components/Price";


function Home() {

    const [blogs, setBlogs] = useState([]);
    const token = useSelector(state => state.token);
   


    useEffect(() => {
        
        // Fetch blogs from the backend
        axios.get('/getallPost')
            .then((response) => {
                setBlogs(response.data.slice(0,5));
                // setLoading(false);
            })
            .catch((error) => {
                // setError(error.message);
                // setLoading(false);
                console.log(error);

            });
    }, []);




    return <>
        <Hero />

        <div className="album py-5 bg-body-tertiary">
            <div className="container1 m-3">
                <h2>Some posts...</h2>
                <hr />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {blogs.map((blog) =>
                        <BlogCard
                            key={blog._id}
                            title={blog.title}
                            content={blog.content}
                            id={blog._id}
                            image={blog.postImage}
                            author={blog.author}
                        />
                    )}
                    {/* Additionl blog card */}
                    <Link  to={`/getAllBlogs`}><button className="blog-button">

                        <div className="col blog p-3">
                            <div className="">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="/collage.jpeg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
                                <div className="card-body">
                                    <h3>Click on this to see more</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex
                                        voluptates aliquam, excepturi vel dssu perspiciatis!...<span className="text-primary" >Read more</span></p>
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
                    </button></Link>
                </div>
            </div>
        </div >
        <hr />
        {/* Additionl hero content */}
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="/collage2.avif" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">So dive into the community</h1>
                    <p className="lead">Dive into a world of insights, stories, and inspiration.
                        Discover articles on a variety of topics, from tech and environment to personal growth and beyond. Whether you're here to learn, be entertained, or share your voice, we have a space for you. Explore, engage, and become part of our community.</p>
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="zg2up">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="327xnj">Default</button>
                    </div> */}
                </div>
            </div>
        </div>
        <hr />

        {/* pricing table */}
        <Price/>
        <hr />
    </>
}

export default Home;



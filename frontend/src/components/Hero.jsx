import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return <>
        <h1><div className="mx-3 pt-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">Medium Blog</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 text-light">Prefect place for sharing your ideas ,knowledge and interest <br />
                    Start you journey now...</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link  to={'/getAllBlogs'}><button type="button" className="heroButton  btn btn-warning btn-lg px-4 me-sm-3" fdprocessedid="b076ab">Start Reading</button></Link>
                    <Link to={'/add/blog'}><button type="button" className="btn btn-outline-dark btn-lg px-4" fdprocessedid="t4aieq">Start Writing</button></Link>
                </div>
            </div>
            <div className="overflow-hidden overflow-hiddenVercel" >
                <div className="container px-5">
                    <img src="/blog4updated.png" aria-placeholder="Something" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
            </div>
        </div></h1>
    </>
}
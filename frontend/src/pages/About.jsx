import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularLoading from "../components/CircularLoading";

export const About = () => {

    const [data, setData] = useState("hello");

    const username = useSelector((state) => state.user.name)

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {

                const response = await axios.get(`/getallPost`,

                );

                //console.log("response for token", response.data);

                setData("hello from saurabh")



            } catch (error) {
                //console.log(error);
                //console.log("data is : ", error.response.data)
                alert("message", error.response.data)
            } finally {
                setLoading(false);
            }
        }

        // if(token){
        fetchData();
        //}
    },
        // [token]
        []
    )

    //console.log("hello from about");


    return (<div>
        {loading ? (<CircularLoading />) :
            (<div className="container">
                <h1>About us</h1>
                <hr />
                <h2><em>Hello,</em> {username} from Community.Dev</h2>
                <p>
                    Community.Dev a platform created for developers, tech enthusiasts,
                    and innovators who are passionate about all things technology! Our blog serves as a
                    hub for sharing knowledge, exploring new ideas, and discussing the latest advancements
                    in the world of technology, blockchain, web development, and the software industry.
                </p>

                <h3>Our Mission</h3>
                <p>
                    At Community.Dev, we believe in the power of shared insights and collaborative learning.
                    Our mission is to create a space where developers of all levels can express their unique
                    perspectives, showcase their projects, and discuss emerging trends in the tech world.
                </p>

                <h3>What We Offer</h3>
                <ul>
                    <li><p><b>In-Depth Articles:</b> Discover well-researched posts on various tech topics, from the latest
                        web development frameworks to blockchain innovations.</p>
                    </li>
                    <li>
                        <p><b>Developer Perspectives:</b> Gain insights directly from developers who share their experiences,
                            projects, and advice.</p>
                    </li>
                    <li>
                        <p><b>Tech Community:</b> Join a growing community of tech enthusiasts who are eager to connect,
                            learn, and contribute.</p>
                    </li>
                </ul>

                <p>
                    Whether you're a seasoned developer, a budding programmer, or simply tech-curious, there’s
                    something here for you. Dive into our content, share your thoughts, and become a part of a
                    community that thrives on the pulse of innovation.
                </p>

                <div className='topNavbar d-flex gap-2 mb-2'>
                    <div className='col-6'>
                        <Link to={'/getAllBlogs'}><button type="button" className="btn btn-outline-info w-100">Start Reading</button></Link>
                    </div>
                    <div className='col-6'>
                        <Link to={'/add/blog'}><button type="button" className="btn btn-outline-info w-100">Bookmarks</button></Link>
                    </div>
                </div>

            </div>)
        }
    </div>)


}
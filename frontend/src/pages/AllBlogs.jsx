
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularLoading from "../components/CircularLoading";
import IndividualBlog from "../components/IndividualBlog";

export default function AllBlogs() {

    let [blog, setBlogs] = useState([])
    let [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    function handleChange(event) {
        const newcategory = event.target.value;
        setCategory(newcategory);


    }

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/getallPost`);
                setBlogs(response.data);
            } catch (error) {
                // console.log(error);

            } finally {
                setLoading(false);
            }
        }
        fetchdata();
    }, [])

    const totalPages = Math.ceil(blog.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (<div>
        {loading ? (<CircularLoading />) :
            (
                <div className='container'>
                    <h1 className="m-4">Posts</h1>

                    <div className="top-head d-flex justify-content-between" >
                        <Link to={`/add/blog`}>  <button type="button" className="btn btn-success mx-4">Contribute</button></Link>
                        <select className="form-select ms-auto" onChange={handleChange} name="category" aria-label="Default select example" >
                            <option value=''>General</option>
                            <option value="AI">AI</option>
                            <option value="Cryptcurrency">Cryptcurrency</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Web development">Web development</option>
                            <option value="App development">App development</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Jobs">Jobs</option>
                            <option value="Economy">Economy</option>
                            <option value="Environment">Environment</option>
                        </select>
                    </div>
                    <div className="mb-6 m-3 allBlogscurrentPost" >
                        {currentPosts
                            .filter((b) => category === '' || b.category === category)
                            .map((blog) =>
                                <li className="m-2" key={blog._id}>
                                    <Link

                                        className="linking"
                                        to={`/specificblog/${blog._id} `}>
                                        <IndividualBlog post={blog} />
                                    </Link>
                                </li>
                            )}
                    </div>
                    {/* pagination */}
                    <div className="forPagination" >
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <Link className="page-link" href="#" aria-label="Previous" onClick={() => paginate(currentPage - 1)}>
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <Link className="page-link" to="#" onClick={() => paginate(i + 1)}>{i + 1}</Link>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <Link className="page-link" href="#" aria-label="Next" onClick={() => paginate(currentPage + 1)}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    </div>

                </div>

            )}
    </div>)
}



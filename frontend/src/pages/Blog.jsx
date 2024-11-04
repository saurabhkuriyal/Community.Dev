import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import parse from 'html-react-parser';
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import CircularLoading from '../components/CircularLoading';
export const Blog = () => {

    const userid = useSelector((state) => state.user.userId);
    const name = useSelector((state) => state.user.name);
    const userImage = useSelector((state) => state.user.userImageURL)


    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    let [count, setCount] = useState(0);

    let [post, setPost] = useState([]);

    let [isBookmarked, setBookmark] = useState(false);

    let [checklike, setCheckLike] = useState(false);

    let [comments, setpostComments] = useState({
        userId: userid,
        postId: id,
        postComment: "",
        name: name,
    })


    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/getPost/${id}`);
                setPost(response.data.post);
                setCount(response.data.post.likes);

                const liked = response.data.post.userIds

                const isLiked = liked.find(like => like === userid);

                if (isLiked !== undefined) {
                    setCheckLike(true);
                } else {
                    setCheckLike(false);
                }


            } catch (error) {
                //console.log(error);

            } finally {
                setLoading(false);
            }

        }

        fetchBlog();
    }, [])

    //for handling like
    async function handleLike() {
        try {
            const response = await axios.post(`/likedPost/${id}`, { userid })


            if (response.data.msg === "Liked") {
                document.getElementById("like").style.color = "red";
            } else if (response.data.msg === "Unliked") {
                document.getElementById("like").style.color = "grey";
            }

            setCount(response.data.post.likes)

        } catch (error) {
            //console.log(error);
            //console.log(error.response.data.msg);



        }
    }
    const image = 'https://www.google.com/imgres?q=Ai&imgurl=https%3A%2F%2Fincubator.ucf.edu%2Fwp-content%2Fuploads%2F2023%2F07%2Fartificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg&imgrefurl=https%3A%2F%2Fincubator.ucf.edu%2Fwhat-is-artificial-intelligence-ai-and-why-people-should-learn-about-it%2F&docid=4jEnd_yUBiw-_M&tbnid=1ATi8GjkqFf3RM&vet=12ahUKEwj6tPro5JWJAxWqT2wGHadZAEUQM3oECBEQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwj6tPro5JWJAxWqT2wGHadZAEUQM3oECBEQAA'

    //bookmark
    async function handlebookmark(id) {

        const bookmarkSituation = !isBookmarked;
        setBookmark(bookmarkSituation);

        try {

            const response = await axios.post(`/add/bookmarks`,
                {
                    userId: userid,
                    postId: id
                }
            )

            //console.log("This is response",response);


            if (response.data.msg === "bokmarked successfully") {
                document.getElementById("bookmark").style.color = "blue";
            } else if (response.data.msg === "already bookmarked") {
                alert("already bookmarked remove from your bookmarks");
            }



        } catch (error) {
            // console.log(error);
            // console.log(error.response.data);


        }

    }


    //comments

    let [showComments, setShowComments] = useState([])
    function handleComment(e) {
        const value = e.target.value;
        setpostComments((prevValue) => {
            return {
                ...prevValue,
                postComment: value
            }
        })

    }

    async function postingComments(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`/post/postcomments`, comments);

            const adddeComment = response.data.commented;
            // console.log("This is ",response.data.commented);



            const response2 = await axios.get(`/get/getcomments/${id}`);
            setShowComments(response2.data.getcomments);



        } catch (error) {
            //console.log(error);
            // console.log("error message", error.response.data.msg);



        }
    }



    useEffect(() => {
        const fetchComments = async () => {

            try {
                const response = await axios.get(`/get/getcomments/${id}`);
                setShowComments(response.data.getcomments);


            } catch (error) {
                //console.log(error);
                //console.log(error.response.data.msg);


            }
        }

        fetchComments();
    }, [id])



    return (<div>
        {loading ? (<CircularLoading />) :
            (
                <div className='BlogtopVercel'>
                    <div className="Blog BlogVercelStyling mx-5 px-3" key={post._id}>
                        <h1>{post.title}</h1>
                        <hr />
                        <em className="author m-1">By {post.author}</em>
                        <p className="datem-1">{post.date}</p>
                        <hr />
                        <div className="operations operationsVercel" >
                            <div className="like" ><FavoriteBorderIcon
                                onClick={handleLike}
                                id="like"
                                className={`like-icon ${checklike ? 'like-icon--red' : ''}`}
                            />{count}</div>

                            <div className="others"><BookmarksIcon onClick={() => handlebookmark(post._id)} id="bookmark" /></div>

                        </div>
                        <hr />
                        <img src={post.postImage} className="img-fluid img-fluidVercelStyle " alt="postimage" /><br /><br />
                        {parse(String(post.content))}<br /><br />
                        <hr />
                        <br />


                        <h4>Comments</h4><br />

                        {showComments.map((comment) => (
                            <ul key={comment._id}>
                                <li><h5>

                                    {comment.userId.userImage ? (<img src={comment.userId.userImage} alt="profile" width="32" height="32" className="rounded-circle" />) : (<AccountCircleIcon />)}

                                    {comment.name}</h5></li>
                                <li className='mx-2'>{comment.postComment} </li>
                            </ul>
                        ))}



                        <form onSubmit={postingComments} >
                            <div className="box">
                                <label htmlFor="validationDefault02" className="form-label">Comment</label>
                                <textarea type="text" className="form-control" id="validationDefault02" onChange={handleComment} name="comment" required></textarea>
                            </div>
                            <div className="col-12">
                                <br /><button className="btn btn-primary" type="submit">Submit </button>
                            </div>
                        </form>

                        <hr />

                    </div>
                </div>
            )}
    </div>)
}

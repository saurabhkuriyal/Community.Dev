import axios from "axios";
import JoditEditor from 'jodit-react';
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularLoading from "../components/CircularLoading";



function AddBooks() {

    let navigate = useNavigate();

    const editor=useRef(null);

    const [loading, setLoading] = useState(false);

    const authorName=useSelector((state)=>state.user.name);

    let [post, setPost] = useState({
        title: "",
        content: "",
        author: authorName,
        category:""
    });

    let [file, setFiles] = useState(null);


    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setPost((prevValue) => {
            if (name === "title") {
                return {
                    ...prevValue,
                    title: value
                }
            } else if (name === "content") {
                return {
                    ...prevValue,
                    content: value
                }
            } else if(name==="category"){
                return{
                    ...prevValue,
                    category:value
                }
            }
        })
    }

    function handleFile(event) {

        setFiles(event.target.files[0]);
    }

    async function send(event) {
        setLoading(true);
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('post', JSON.stringify(post));
        //console.log(post);
        

        try {


            const response = await axios.post(`/postBlog`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.msg === "post created succesfully") {

                navigate('/')
            } else {
                alert("something went wrong")
            }

        } catch (error) {
            //console.log(error);
            //console.log(error.response.data.msg);
            

        }finally {
            setLoading(false);
        }
    }

    return (<div>
        {loading?(<CircularLoading/>):
        (
        <div className="container">
            <div className="form">
                <form action="" onSubmit={send} className="row g-3">
                    <div className="box">
                        <label htmlFor="validationDefault01" className="form-label">Title</label>
                        <input type="text" className="form-control" id="validationDefault01" onChange={handleChange}  name="title" required />
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Content</label>
                        
                        <JoditEditor
                        ref={editor}
                        value={post.content}
                        onChange={(content) => setPost((prevValue) => ({ ...prevValue, content }))}
                        name="content"

                        />
                    </div>

                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Author</label>
                        <input type="text" className="form-control" id="validationDefault03" name="author" defaultValue={authorName} required />
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Image</label>
                        <input type="file" className="form-control" id="validationDefault03" onChange={handleFile} name="image"  />
                    </div>
                    
                    <div className="box">
                    <select className="form-select" onChange={handleChange} name="category" aria-label="Default select example" >
                        <option defaultValue>General</option>
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

                    <div className="col-12">
                        <br /><button className="btn btn-primary" type="submit">Submit form</button>
                    </div>

                    
                </form>
            </div>

        </div>
        )}
        </div>)

    
}

export default AddBooks;
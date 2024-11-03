import axios from 'axios';
import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CircularLoading from './CircularLoading';

export default function Edit() {
    const { id } = useParams();
    
    const editor=useRef(null);
    const [loading, setLoading] = useState(false);

    const config = {
        readonly: false, // Enable editing
        placeholder: "", // Remove default "Start typing..." text
    };

    let navigate = useNavigate();

    let [post, setPost] = useState({});
    let [file, setFiles] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/getPost/${id}`);
                post=response.data;
                setPost(response.data.post);
                //console.log("Post from get speacific post",post);
                

            } catch (error) {
                //console.log(error);

            }finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, [])

    let [update,setUpdate]=useState(
        {title: "",
        content: "",
        author: "",
        category:""}
    )

    useEffect(() => {
        if (post) {
            setUpdate({
                title: post.title || '',
                content: post.content || '',
                author: post.author || '',
                category: post.category || 'General'
            });
        }
    }, [post]);
    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setUpdate((prevValue) => {
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
            } else if (name === "author") {
                return {
                    ...prevValue,
                    author: value
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
        event.preventDefault();
        const formData = new FormData();
        if(file){
        formData.append('file', file);
        }
        formData.append('update', JSON.stringify(update));
        //console.log("New from data is ",update);
        

        try {


            const response = await axios.patch(`/edit/post/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            //console.log(response);
            
            if (response.status === 200) {

                navigate(`/specificblog/${id}`)
            } else {
                alert("something went wrong")
            }

        } catch (error) {
            //console.log(error);
            //console.log(error.response.data)

        }
    }


    return  (<div>
        {loading?(<CircularLoading/>):
    (
        <div>
            <div className="container">
                <div className="form">
                    <form action="" onSubmit={send} className="row g-3">
                        <div className="box">
                            <label htmlFor="validationDefault01" className="form-label">Title</label>
                            <input type="text" className="form-control" id="validationDefault01" value={update.title} onChange={handleChange} name="title"  />
                        </div>
                        <div className="box">
                            <label htmlFor="validationDefault02" className="form-label">Content</label>
                            <JoditEditor
                        ref={editor}
                        config={config}
                        value={update.content}
                        onBlur={(content) => setUpdate((prevValue) => ({ ...prevValue, content }))}
                        name="content"

                        />
                        
                        </div>

                        <div className="box">
                            <label htmlFor="validationDefault02" className="form-label">Author</label>
                            <input type="text" className="form-control" id="validationDefault03" value={update.author} onChange={handleChange} name="author"  />
                        </div>
                        <div className="box">
                            <label htmlFor="validationDefault02" className="form-label">Image</label>
                            <input type="file" className="form-control" id="validationDefault03" onChange={handleFile} name="image"/>
                        </div>

                        <div className="box">
                            <select className="form-select" onChange={handleChange} name="category" value={update.category} aria-label="Default select example" >
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
        </div>
    )
        }
        </div>)
}

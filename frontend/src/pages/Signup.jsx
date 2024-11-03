import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularLoading from "../components/CircularLoading";


export const Signup = () => {

    const [loading, setLoading] = useState(false);

    const [initial, signUpDetails] = useState({
        name: "",
        email: "",
        username: "",
        mobileNo: "",
        password: ""
    })

    const [Password, confirmation] = useState("");
    const [file,setFiles]=useState(null);

    const navigate = useNavigate();

    function handleConfirmation(event) {
        confirmation(event.target.value);
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        signUpDetails((prevValue) => {
            if (name === "name") {
                return {
                    ...prevValue,
                    name: value
                }
            } else if (name === "email") {
                return {
                    ...prevValue,
                    email: value,
                }
            } else if (name === "username") {
                return {
                    ...prevValue,
                    username: value
                }
            } else if (name === "mobileNo") {
                return {
                    ...prevValue,
                    mobileNo: value
                }
            } else if (name === "password") {
                return {
                    ...prevValue,
                    password: value
                }
            }
        })
    }

    function handleFile(e){
        setFiles(e.target.files[0]);
    }

    async function send(event) {
        setLoading(true);
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('initial', JSON.stringify(initial));
       // console.log(initial);

        if (initial.password === Password) {
            try {
                const response = await axios.post('/submit', formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
            })

                if (response.status===200) {

                    navigate('/login');
                } else {
                    alert("try again")
                }



            } catch (error) {
               // console.log(error);

            } finally {
                setLoading(false);
            }

        } else {
            alert("correct your confirm password")
        }
    }



    return (<div>
        {loading?(<CircularLoading/>):
        (
        <div className="container">
            <div className="form p-0 signup" >
                <form action="" onSubmit={send}  className="row g-3 signUpVercelStyle">
                    <div className="box">
                        <label htmlFor="validationDefault01" className="form-label">Name</label>
                        <input type="text" className="form-control" id="validationDefault01" onChange={handleChange} name="name" required />
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Email</label>
                        <input type="text" className="form-control" id="validationDefault02" onChange={handleChange} name="email" required />
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" className="form-control" id="validationDefaultUsername" onChange={handleChange} name="username" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Mobile No.</label>
                        <input type="number" className="form-control" id="validationDefault03" onChange={handleChange} name="mobileNo" required />
                    </div>


                    <div className="box">
                        <label htmlFor="validationDefault05" className="form-label">Password</label>
                        <input type="password" className="form-control" id="validationDefault05" autoComplete="off" onChange={handleChange} name="password" required />
                    </div>

                    <div className="box">
                        <label htmlFor="validationDefault05" className="form-label">Confirm Paasword</label>
                        <input type="password" className="form-control" id="validationDefault04" autoComplete="off" onChange={handleConfirmation} name="confirmPassword" required />
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Image</label>
                        <input type="file" className="form-control" id="validationDefault07" onChange={handleFile} name="image"  />
                    </div>
    
                    <div className="col-12">
                        <br /><button className="btn btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>

        </div>
        )}
        </div>)
    
}
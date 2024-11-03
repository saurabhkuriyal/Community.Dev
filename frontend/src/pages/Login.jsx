import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CircularLoading from "../components/CircularLoading";
import { userlogin } from "../feature/handleApi/tokenSlice";
import { setUser } from "../feature/handleApi/userSlice";

export const Login = () => {


    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const [login, newLogin] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        newLogin((prevValue) => {
            if (name === "username") {
                return {
                    ...prevValue,
                    username: value
                }
            } else if (name === "password") {
                return {
                    ...prevValue,
                    password: value
                }
            }
        })
    }

    async function send(event) {
        setLoading(true);
        event.preventDefault();
        try {
            const response = await axios.post('/login', login);

            const currToken = response.data.token;
            //console.log("This is image",response.data.userImage);
            
           // console.log(" this is res", currToken);
           // console.log("This is userid",response.data.userId);
           // console.log("This is for usertype",response.data.userType);
            

            

            dispatch(userlogin(currToken));
            
            dispatch(setUser({userId:response.data.userId, name:response.data.name,userType:response.data.userType,userImageURL:response.data.userImage}))
            navigate("/")
        } catch (error) {
            //console.log("Error data :", error);
            alert(error.response.data.msg);


        }finally {
            setLoading(false);
        }
    }

    // function handleClick() {
    //     navigate("/signup")
    // }

    const fixStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

    return  (<div>
        {loading?(<CircularLoading/>):(
        <div className="container">
        <div className="form-login m-0 p-1" style={fixStyle}>
                <form onSubmit={send} >
                    <h1>Please sign in</h1>
                    <div className="box">
                        <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" className="form-control" onChange={handleChange} id="validationDefaultUsername"  name="username" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className="box">
                        <label htmlFor="validationDefault05" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handleChange} id="validationDefault05" autoComplete="off"  name="password" required />
                    </div>
                    
                    <div className="col-12">
                        <br /><button className="btn btn-primary" type="submit">Login</button>
                    </div>

                    <p >Click here to<Link to={"/signup"} className="mx-2">Create account</Link></p>
                </form>
                
            </div>
            

        </div>)
        }
        </div>)

}
import React, {useState} from "react";
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://localhost:8000/api/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({setToken}) {
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e =>{
        e.preventDefault();
        const token = await loginUser({
            email, password
        });
        setToken(token)
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <div className="login-wrapper">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        <p>Email</p>
                                                        <input className="form-control form-control-user" type="text" onChange={ e => setUserName(e.target.value)}/>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        <p>Password</p>
                                                        <input className="form-control form-control-user" type="password" onChange={ e => setPassword(e.target.value)}/>
                                                    </label>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary btn-user btn-block" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
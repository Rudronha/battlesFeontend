import React from "react";
import "./auth.css";

function Login(){
    
    return(
        <div className="contaner">
            <div className="box">
                <div className="logo">
                    <h2>Login</h2>
                </div>
                <div className="form">
                <form >
                    <label className="label">Email:</label>
                    <input 
                    required
                    type="text"
                    placeholder="Enter your email" 
                    className="input_block"
                    />
                    <label className="label">Password:</label>
                    <input 
                    required
                    type="password"  
                    placeholder="Enter your password"
                    className="input_block"
                    />
                    <button className="btn">Log in</button>
                    <a href="/" className="forget">Forget password?</a>
                </form>
                <h5>Don't have an account?<a href="/">Register</a></h5>
                </div>
            </div>
        </div>
    );
}

export default Login;
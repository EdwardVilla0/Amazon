import React from 'react';
import './Login.styles.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png "
                    alt="" />
            </Link>

            <div className="login__container">
                <h1>sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button className="login__containerSignInButton">Sign In</button>
                </form>

                <p>
                    by signing in you agree to the terms and conditions of Amazon
                </p>
                <button className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login

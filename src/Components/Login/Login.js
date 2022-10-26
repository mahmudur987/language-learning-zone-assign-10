import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';

const Login = () => {
    const { login, googleLogIn, githubLogIn } = useContext(authContext)
    const [error, SetError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });

        })
            .catch((error) => {
                const errorMessage = error.message;
                SetError(errorMessage)
                console.error(error)
            });
        console.log(email, password)
    }
    const handlegoogleLogin = () => {
        const googleprovider = new GoogleAuthProvider()
        googleLogIn(googleprovider).then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user)
        }).catch(error => {
            const errormasage = error.message;
            SetError(errormasage)
        })
    }
    const handleGitHubLogin = () => {
        const gitprovider = new GithubAuthProvider()
        githubLogIn(gitprovider).then(result => {
            const user = result.user;
            navigate(from, { replace: true });

            console.log(user)
        }).catch(error => {
            const errormasage = error.message;
            SetError(errormasage)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login!</h1>
                    <p className="py-6">Don't  have an Account ! please <Link className='text-blue-500 text-bold' to={'/signup'}> Sign Up</Link> first</p>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='text-red-500'>  {error}  </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log in  </button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handlegoogleLogin} className="btn btn-primary"> <FaGoogle className='text-white text-2xl mx-4 '></FaGoogle>  Log in with Google </button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGitHubLogin} className="btn btn-primary"> <FaGithub className='text-white text-2xl mx-4 '></FaGithub>  Log in with GitHub </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
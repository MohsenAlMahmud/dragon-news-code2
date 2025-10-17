import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const {signIn} = use(AuthContext); 
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(`${location.state? location.state : '/'}`)
        }).catch(error =>{
            console.log(error);
            // setError(error)

        })

    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='font-bold text-2xl px-10 py-5'>Login in your Account</h2>
                            <fieldset className="fieldset">
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required/>
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required/>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {/* {
                                    error && <p className='text-red-500 text-xs'>{error}</p>
                                } */}
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                <p className='font-semibold text-center pt-5'>Don't Have An Account?  <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

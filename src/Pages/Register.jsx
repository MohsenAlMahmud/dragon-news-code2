import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext);
    
    const [nameError, setNameError] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError('Name should be more then 5 character');
            return;
        }
        else{
            setNameError('');
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            updateUser({displayName : name, photoUrl : photo})
            .then(()=>{
                setUser({...user, displayName : name, photoUrl : photo});
                navigate('/');
            }).catch(error =>{
            console.log(error);
            setUser(user);
        })
            
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className='font-bold text-2xl px-10 py-5'>Register in your Account</h2>
                            <form onSubmit={handleRegister} className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="type" name='name' className="input" placeholder="Name" required/>
                                {
                                    nameError && <p className='text-red-500 text-xs'>{nameError}</p>
                                }
                                {/* Photo URL */}
                                <label className="label">Photo URL</label>
                                <input type="type" name='photo' className="input" placeholder="Photo URL" required/>
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required/>
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required/>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                <p className='font-semibold text-center pt-5'>Already Have An Account?  <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import toast from 'react-hot-toast'

const Register = () => {
    const { loading, createUser, googleSignIn } = useContext(AuthContext)
    const [loadingSignIn, setLoadingSignIn] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = (event) => {
        setLoadingSignIn(true)
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUser(email, password)
            .then((user) => {
                console.log(user)
                event.target.reset()
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    toast.success("Registration successfull !")
                    navigate(location?.state ? location.state : '/')
                })
            })
            .catch(() => {
                toast.error("Something went wrong,Registration failed !")
            })
    }
    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google SignIn succefull!")
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("Somethin went wrong, SignIn with google failed !")
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><span className="link link-hover"><Link to={'/login'}>Already have an account?Login.</Link></span></div>
                            {loading && loadingSignIn ? <button type='submit' className="btn btn-neutral mt-4"><span className="loading loading-spinner loading-md text-white"></span></button> : <button type='submit' className="btn btn-neutral mt-4">Signup</button>}

                        </form>
                        <button onClick={handleSignInWithGoogle} className='btn btn-outline uppercase'><FaGoogle />sign in with google </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
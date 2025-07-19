import React, { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
    const { loading, SignIn, googleSignIn } = useContext(AuthContext)
    const [loadingSignIn, setLoadingSignIn] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (event) => {
        setLoadingSignIn(true)
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        SignIn(email, password)
            .then(() => {
                toast.success("Login successfull !")
                navigate(location?.state ? location.state : '/')
                setLoadingSignIn(false)
            })
            .catch(() => {
                toast.error("Something went wrong,Login failed !")
                setLoadingSignIn(false)
            })
    }
    const handleSignInWithGoogle = () => {
        setLoadingSignIn(true)
        googleSignIn()
            .then(() => {
                toast.success("Google SignIn succefull!")
                navigate(location?.state ? location.state : '/')
                setLoadingSignIn(false)
            })
            .catch(() => {
                toast.error("Somethin went wrong, SignIn with google failed !")
                setLoadingSignIn(false)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><span className="link link-hover"><Link to={'/signup'}>Don't have an account?SignUp.</Link></span></div>
                            {loading && loadingSignIn ? <button type='submit' className="btn btn-neutral mt-4"><span className="loading loading-spinner loading-md text-white"></span></button> : <button type='submit' className="btn btn-neutral mt-4">Login</button>}

                        </form>
                        <button onClick={handleSignInWithGoogle} className='btn btn-outline uppercase'><FaGoogle />sign in with google </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { FaGoogle } from 'react-icons/fa'

const Register = () => {
    const { loading, createUser, googleSignIn } = useContext(AuthContext)
    const [loadingSignIn, setLoadingSignIn] = useState(false)
    const handleRegister = (event) => {
        setLoadingSignIn(true)
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUser(email, password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
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
                            <div><a className="link link-hover">Forgot password?</a></div>
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
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, logout } from '../../firebase_setup/firebase';
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";

// import { getAuth } from "firebase/auth";

import "./Login.css"
import Loading from '../../components/loading/Loading';




const Login = () => {
    // const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (loading) return;
        if (user) console.log(user);
    }, [user, loading])

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (

        // <div className='loginContainer'>                                                                 
        <div className='loginContainer'>
            {!user && !loading && <form>
                <div className='email '>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='pass'>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* <div> */}
                <button
                    onClick={onLogin}
                >
                    Login
                </button>
                {/* </div>                                */}
            </form>}

            {!loading && user && <button onClick={() => logout()}>
                log out
            </button>}
            
            {loading && <Loading />}

        <div/>
        </div>
    )
}

export default Login
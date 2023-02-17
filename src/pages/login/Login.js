import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, logout } from '../../firebase_setup/firebase';
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import Alert from '@mui/material/Alert'
// import { getAuth } from "firebase/auth";
import { motion } from "framer-motion"

import styles from "./Login.module.css"
import Loading from '../../components/loading/Loading';




const Login = () => {
    // const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

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
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true)

                setTimeout(() => {
                    setError(false)
                }, 3000)

                console.log(errorCode, errorMessage)
            });

    }

    return (

        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className={styles.loginContainer}>
                {/* login error */}
                {!loading && error &&
                    // <div className="error">
                    <Alert className={styles.error} severity="error">This is an error alert — check it out!</Alert>
                    // </div>
                }


                {/* if not already logged in and not loading , show the login form  */}
                {!user && !loading &&
                    <form>
                        <div className={styles.email}>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input className={styles.input}
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.pass}>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                            className={styles.input}
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                        <button className={styles.btn} onClick={onLogin}>Login</button>

                    </form>}

                {/* log out button, appears if the user is logged in and loading = false */}
                {!loading && user &&
                    <button className={styles.btn} onClick={() => logout()}> log out</button>}

                {/* loading component  */}
                {loading && <Loading />}



                <div />
            </div>
        </motion.div>

    )
}

export default Login
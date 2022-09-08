import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config.js'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (err) {
            console.log(err);
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) navigate("/dashboard");
    });

    return (
        <div className="login">
            <input type="text" placeholder="email" onChange={e => setLoginEmail(e.target.value)}></input>
            <input type="password" placeholder="password" onChange={e => setLoginPassword(e.target.value)}></input>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
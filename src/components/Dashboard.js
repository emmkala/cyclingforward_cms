import { Link } from 'react-router-dom'
import { auth } from '../firebase-config.js'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
    onAuthStateChanged(auth, (user) => {
        if (!user) navigate("/");
    });

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="dashboard">
            <h1>I'm In</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard
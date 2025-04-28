import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/api/login', { email, password });
    login(response.data.user);
    navigate('/');
    };

    return (
    <div className="row justify-content-center">
        <div className="col-md-6">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="form-control mb-2" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn btn-primary">Login</button>
        </form>
        </div>
    </div>
    );
}

export default Login;

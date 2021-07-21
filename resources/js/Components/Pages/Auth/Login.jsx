import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const Login = () => {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const target = e.currentTarget;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        setData(target.name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>E-mail:</label>
                <input type="text" value={data.email} name="email"
                       onChange={handleChange}/>
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={data.password} name="password"
                       onChange={handleChange}/>
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <input type="checkbox" checked={data.remember} name="remember"
                       onChange={handleChange}/> Remember Me
            </div>
            <div>
                <button type="submit" disabled={processing}>Login</button>
            </div>
        </form>
    );
};

export default Login;
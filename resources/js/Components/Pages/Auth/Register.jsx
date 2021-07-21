import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const Register = ({jetstream}) => {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
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
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={data.name} name="name"
                       onChange={handleChange}/>
                {errors.name && <div>{errors.name}</div>}
            </div>
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
                <label>Conform password</label>
                <input type="password" value={data.password_confirmation}
                       name="password_confirmation"
                       onChange={handleChange}/>
                {errors.password_confirmation &&
                <div>{errors.password_confirmation}</div>}
            </div>


            {jetstream.hasTermsAndPrivacyPolicyFeature && (<div>
                <input type="checkbox" checked={data.terms} name="terms"
                       onChange={handleChange}/>
                I agree to the <a target="_blank" href={route('terms.show')}>Terms
                of Service</a> and <a target="_blank"
                                      href={route('policy.show')}>Privacy
                Policy</a>
            </div>)}

            <div>
                <button type="submit" disabled={processing}>Register</button>
            </div>
        </form>
    );
};

export default Register;
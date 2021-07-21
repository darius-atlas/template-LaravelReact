import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Dashboard = ({user}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        Inertia.post(route('logout'));
    };
    return <div>Welcome {user.name},
        <button onClick={handleLogout}>Log Out</button></div>;
};

export default Dashboard;
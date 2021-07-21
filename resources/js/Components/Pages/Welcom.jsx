import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Welcome = ({canLogin, user, laravelVersion, phpVersion}) => {
    return (<div
        className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        {canLogin &&
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user && 
                <Link href={route('dashboard')}
                    className="text-sm text-gray-700 underline">
                    Dashboard
            </Link>}

            {!user && (<>
                <Link href={route('login')}
                      className="text-sm text-gray-700 underline">
                    Log in
                </Link>
                <Link href={route('register')}
                      className="ml-4 text-sm text-gray-700 underline">
                    Register
                </Link>
            </>)}
        </div>}

        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div
                className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </div>
        </div>

    </div>);
};

export default Welcome;
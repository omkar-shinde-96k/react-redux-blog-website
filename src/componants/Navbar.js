import React from 'react';
import '../App.css';


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header>
                <Link to="/" className="createpost">Home</Link>
                <Link to="/createpost" className="createpost">Create Post</Link>
            </header>

            <Outlet />
        </>
    )
}

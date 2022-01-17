import React from 'react';
import '../App.css';

import News from '../componants/News';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

const Homepage = () => {

    return (
        <>
            <h1 align="center">NEWS</h1>
            <div className="main">
                <div className="categories">
                    <Link className="cat" to="/popular">popular</Link>
                    <Link className="cat" to="/sport">sport</Link>
                    <Link className="cat" to="/entertainment">entertainment</Link>
                </div>
                <div className="news-sec">
                    <h1>hello</h1>
                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default Homepage 
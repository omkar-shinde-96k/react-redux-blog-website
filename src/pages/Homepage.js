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
                    <Link className="cat" to="/enter">Entertainment</Link>
                    <Link className="cat" to="/sports">sports</Link>
                </div>
                <div className="news-sec">
                    <h1>hello</h1>
                </div>
            </div>

            {/* <Outlet /> */}
        </>
    )
}

export default Homepage 
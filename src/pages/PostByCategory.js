import React from 'react';
import { Routes, Route, useParams, Link } from "react-router-dom";

export const PostByCategory = () => {
    let { catId } = useParams();
    return (
        <>
            <div>
                post by category {catId}
            </div>

            <div className="news">
                <p>lorem ipsum dolor sit amet lorem305 et lorem399 et lorem lorem401 et lorem sdfj lksdfsdfks fdsfksdjfskfsdf sdjfksjdfksjfkljsfs fksdfjksjfsdf sf</p>
                <Link to="22">Read More</Link>
            </div>
            <div className="news">
                <p>lorem ipsum dolor sit amet lorem305 et lorem399 et lorem lorem401 et lorem sdfj lksdfsdfks fdsfksdjfskfsdf sdjfksjdfksjfkljsfs fksdfjksjfsdf sf</p>
                <Link to="22">Read More</Link>
            </div>
        </>

    )
}

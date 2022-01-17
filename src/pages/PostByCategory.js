import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";

export const PostByCategory = () => {
    let { catId } = useParams();
    return (
        <div>
            post by category {catId}
        </div>
    )
}

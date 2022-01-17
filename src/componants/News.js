import React, { Component } from 'react'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
export default class News extends Component {
    render() {
        return (
            <>
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
}

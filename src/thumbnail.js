import React from 'react'
import {Link} from 'react-router-dom'
import './App.js'

function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-title">
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div className="project-image">
                    <img src={props.image} width="40%" alt="Project Image"/>
                </div>
                <div className="project-category">
                    <h3>
                        {props.category}
                    </h3>
                </div>
            </Link>
        </div>
    )
}

export default Thumbnail
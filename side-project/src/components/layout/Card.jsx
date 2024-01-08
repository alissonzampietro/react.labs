import React from "react";
import "./Card.css";

export default ({title, children}) => {
    return <div className="card">
        <h1>
            {title}
        </h1>
        <div className="content">
            {children}
        </div>
    </div>
}
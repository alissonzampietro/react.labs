/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import "./Card.css";
import { Theme } from "../../context/theme";

export default ({title, children}) => {

    const color = useContext(Theme);

    return <div className="card" style={{backgroundColor: color}}>
        <h3 className="title">
            {title}
        </h3>
        <div className="content">
            {children}
        </div>
    </div>
}
import React from "react";
import style from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <div className={style.imgContainer}><a href={''}>View</a></div>
            </div>
            <div className={style.title}><h3>{props.title}</h3></div>
            <div className={style.description}><span>{props.description}</span></div>
        </div>
    );
}


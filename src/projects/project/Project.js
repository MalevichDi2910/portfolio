import React from "react";
import style from './Project.module.css';

export const Project = (props) => {


    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.viewBtn} href={''}>View</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}><span>{props.description}</span></span>
            </div>
        </div>
    );
}


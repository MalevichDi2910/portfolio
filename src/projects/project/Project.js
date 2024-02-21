import React from "react";
import style from './Project.module.scss';

export const Project = (props) => {

    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}><button className={style.btn}>view project</button></div>
            <div className={style.projectInfo}>
                <h3>{props.title}</h3>
                <div>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
}


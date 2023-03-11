import React from "react";
import style from './Title.module.scss';

export const Title = (props) => {
    return (
        <div className={style.title}>
            <span>{props.primaryText}</span>
            <h2>{props.text}</h2>
        </div>
    );
}


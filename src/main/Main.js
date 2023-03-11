import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Di from './../assets/image/Di.jpg';

export const Main = () => {

    const me = {
        backgroundImage: `url(${Di})`
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.greetings}>
                {/*<span>Hi there</span>*/}
                <h1 className={style.title}>Hi, I'm
                    <span className={style.name}> Diana Malevich</span>
                    <br/>
                    <span className={style.headerCaption}>a Frontend Developer</span>
                </h1>


            </div>
            <div style={me} className={style.photo}></div>
            </div>
        </div>
    );
}

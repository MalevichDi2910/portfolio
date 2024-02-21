import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Slide from "react-awesome-reveal";
import Di from './../assets/image/Di.png';
import { Link } from "react-scroll";

export const Main = () => {

    const me = {
        backgroundImage: `url(${Di})`
    };


    return (
        <div id='main' className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`} style={{flexWrap: 'nowrap'}}>
                <Slide direction={"left"} triggerOnce>
                <div className={style.greetings}>
                    <h1 className={style.title}>Hello,
                        <br/>
                        <span>I'M </span><span className={style.name}>DIANA MALEVICH</span>
                        <br/>
                        <ReactTypingEffect
                            className={style.headerCaption}
                            typingDelay={'0'}
                            eraseDelay={'2500'}
                            text='a Frontend Developer.'
                        />
                    </h1>
                    <Link to={'contacts'} duration={500} smooth={true} offset={1}>
                        <button className={style.btn}>Contact me</button>
                    </Link>
                </div>
                </Slide>
                <Slide direction={"right"} triggerOnce className={style.imageSlider}>
                    <div className={style.imageContainer}>
                        <img src={Di} className={style.photo} alt={"Me"}/>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

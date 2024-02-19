import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Di from './../assets/image/Di.png';
// import {Tilt} from 'react-tilt'

export const Main = () => {

    const me = {
        backgroundImage: `url(${Di})`
    };


    return (
        <div id='main' className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetings}>
                    <h1 className={style.title}>Hello,
                        <br/>
                        <span>I'M</span><span className={style.name}>DIANA MALEVICH</span>
                        <br/>
                        <ReactTypingEffect
                            className={style.headerCaption}
                            typingDelay={'0'}
                            eraseDelay={'2500'}
                            text='a Frontend Developer.'
                        />
                    </h1>
                    <button className={style.btn}>Contact me</button>
                </div>

                {/*<Tilt options={{max: 25}}>*/}
                    <div style={me} className={style.photo}></div>
                {/*</Tilt>*/}

            </div>
        </div>
    );
}

import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Di from './../assets/image/Di.jpg';
import { Tilt } from 'react-tilt'
// import Particles from 'react-tsparticles';
// import {loadFull} from 'tsparticles';
// import {Particle} from "../common/components/particle/Particle";

export const Main = () => {

    const me = {
        backgroundImage: `url(${Di})`
    };

    // const particlesOptions = {
    //     particles: {
    //         number: {
    //             value: 80,
    //             density: {
    //                 enable: true,
    //                 value_area: 800
    //             }
    //         }
    //     }
    // };

    return (
        <div id='main' className={style.mainBlock}>
            {/*<Particle />*/}
            <div className={styleContainer.container}>
            <div className={style.greetings}>
                <h1 className={style.title}>Hi, I'm
                    <span className={style.name}> Diana Malevich</span>
                    <br/>
                    <ReactTypingEffect
                        className={style.headerCaption}
                        typingDelay={'0'}
                        eraseDelay={'2500'}
                        text='a Frontend Developer.'
                    />
                </h1>
            </div>
                <Tilt options={{max: 25}}>
                    <div style={me} className={style.photo}></div>
                </Tilt>
            </div>
        </div>
    );
}

import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Di from './../assets/image/Di.jpg';
import { Tilt } from 'react-tilt'
// import Particles from 'react-tsparticles';
// import {loadFull} from 'tsparticles';
import {Particle} from "../common/components/particle/Particle";

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
            <Particle />
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
                    {/*<span className={style.description}>*/}
                    {/*    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in maxime*/}
                    {/*reprehenderit molestiae animi tenetur perferendis doloribus dolores, neque*/}
                    {/*incidunt cum magni error eum quidem ex molestias amet enim fugiat!*/}
                    {/*Illum alias eveniet pariatur, error, veniam vero doloremque necessitatibus*/}
                    {/*cum nemo nulla, voluptatem repellendus eum? Amet autem quam, libero saepe*/}
                    {/*nihil deserunt quidem voluptatum placeat voluptas voluptatibus, vitae, unde voluptate.*/}
                    {/*</span>*/}
            </div>

                {/*<Tilt options={{max: 25}}>*/}
                    <div style={me} className={style.photo}></div>
                {/*</Tilt>*/}
            </div>
        </div>
    );
}

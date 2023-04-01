import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import linkedin from "../assets/image/linkedin.svg";
import telegram from "../assets/image/telegram.svg";
import email from "../assets/image/email.svg";
import github from "../assets/image/github.svg";

export const Footer = () => {

    const linkedinIcon = {
        backgroundImage: `url(${linkedin})`
    };

    const telegramIcon = {
        backgroundImage: `url(${telegram})`
    };

    const mailIcon = {
        backgroundImage: `url(${email})`
    };

    const githubIcon = {
        backgroundImage: `url(${github})`
    };

    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h3>You can find me here:</h3>
                <div className={style.footerSquares}>
                    <a target={'_blank'} href="https://www.linkedin.com/in/diana-m-093620225/">
                        <div style={linkedinIcon} className={style.square}></div>
                    </a>
                    <a target={'_blank'} href="https://t.me/maldi2910">
                        <div style={telegramIcon} className={style.square}></div>
                    </a>
                    <a target={'_blank'} href="https://e.mail.ru/cgi-bin/sentmsg?To=malevich_diana15@mail.ru&from=otvet&afterReload=1">
                        <div style={mailIcon} className={style.square}></div>
                    </a>
                    <a target={'_blank'} href="https://github.com/MalevichDi2910">
                        <div style={githubIcon} className={style.square}></div>
                    </a>
                </div>
                <h2>@ 2022 All rights reserved</h2>
            </div>
        </div>
    );
}
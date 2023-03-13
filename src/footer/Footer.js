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
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>You can find me here:</h3>
                <div className={style.footerSquares}>
                    <div style={linkedinIcon} className={style.square}></div>
                    <div style={telegramIcon} className={style.square}></div>
                    <div style={mailIcon} className={style.square}></div>
                    <div style={githubIcon} className={style.square}></div>
                </div>
                <h2>@ 2022 All rights reserved</h2>
            </div>
        </div>
    );
}
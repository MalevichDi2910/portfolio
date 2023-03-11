import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Diana Malevich</h2>
                <div className={style.footerSquares}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <h2 className={style.footerText}>@ 2022 Все права защищены</h2>
            </div>
        </div>
    );
}
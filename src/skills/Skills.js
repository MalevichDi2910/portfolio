import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import react from "../assets/image/react.svg";
import javascript from "../assets/image/javascript.svg";
import css3 from "../assets/image/css3.svg";
import redux from "../assets/image/redux.svg";
import typescript from "../assets/image/typescript.svg";
import html5 from "../assets/image/html5.svg";
import api from "../assets/image/api.svg";
import git from "../assets/image/git.svg";
import storybook from "../assets/image/storybook.svg";
import jest from "../assets/image/jest.svg";

export const Skills = () => {

    const reactIcon = {
        backgroundImage: `url(${react})`
    };

    const javaScript = {
        backgroundImage: `url(${javascript})`
    };

    const cssIcon = {
        backgroundImage: `url(${css3})`
    };

    const reduxIcon = {
        backgroundImage: `url(${redux})`
    };

    const typeScript = {
        backgroundImage: `url(${typescript})`
    };

    const html = {
        backgroundImage: `url(${html5})`
    };

    const apiIcon = {
        backgroundImage: `url(${api})`
    };

    const gitIcon = {
        backgroundImage: `url(${git})`
    };

    const storybookIcon = {
        backgroundImage: `url(${storybook})`
    };

    const jestIcon = {
        backgroundImage: `url(${jest})`
    };


    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Fade top>
                    <Title text={'My professional skills'}/>
                </Fade>
                <div className={style.skills}>
                    <Skill style={reactIcon} title={'REACT'} />
                    <Skill style={reduxIcon} title={'REDUX'} />
                    <Skill style={typeScript} title={'TYPESCRIPT'} />
                    <Skill style={javaScript} title={'JAVASCRIPT'} />
                    <Skill style={cssIcon} title={'CSS3'} />
                    <Skill style={html} title={'HTML5'} />
                    <Skill style={apiIcon} title={'REST API'} />
                    <Skill style={jestIcon} title={'TDD - JEST'} />
                    <Skill style={storybookIcon} title={'STORYBOOK'} />
                    <Skill style={gitIcon} title={'GIT'} />
                </div>
            </div>
        </div>
    );
}


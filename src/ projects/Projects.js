import React from "react";
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                <Project title={'Frontend Developer'} description={'Aliquam eros urna, dignissim an '}/>
                <Project title={'Backend Developer'} description={'Aenean at odio dignissim  eros urna dirjo '}/>
                </div>
            </div>
        </div>
    );
}


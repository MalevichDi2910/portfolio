import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/Guide.jpg';
import helloImage from './../assets/image/file.jpg';

export const Projects = () => {

    const todo = {
        backgroundImage: `url(${todoImage})`
    };

    const hello = {
        backgroundImage: `url(${helloImage})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'} primaryText={'visit my portfolio and keep your feedback'}/>
                <div className={style.projects}>
                    <Project style={todo} title={'Social network'} description={'Aliquam eros urna, dignissim an '}/>
                    <Project style={hello} title={'Todolist project'} description={'Aenean at odio dignissim  eros urna.  Lorem ipsum dolor sit amet. '}/>
                </div>
            </div>
        </div>
    );
}



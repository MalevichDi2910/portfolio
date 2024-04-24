import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.png';
import SN from './../assets/image/sn.png';
import cardImage from './../assets/image/card.jpg'
import {Zoom} from 'react-awesome-reveal';

export const Projects = () => {

    const todo = {
        backgroundImage: `url(${todoImage})`
    };

    const hello = {
        backgroundImage: `url(${SN})`
    };

    const card = {
        backgroundImage: `url(${cardImage})`
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Zoom>
                    <Title text={'Projects'} primaryText={'visit my portfolio and keep your feedback'}/>

                <div className={style.projects}>
                    <Project style={hello} title={'Social network'} link={'https://MalevichDi2910.github.io/social-network'}
                             description={'Social Network is an online platform that allows people to create an account and interact with other people on the website.'}/>

                    <Project style={card} title={'Flashcards'} link={'https://flashcards-projectt.vercel.app/sign-in'}
                             description={'Flashcards is an online platform for creating your own flashcards for learning and memorization.' +
                                 ' Cards can be for learning foreign words, programming and etc.'}/>
                    <Project style={todo} title={'Task tracker'} link={'https://MalevichDi2910.github.io/task-tracker'}
                             description={'Task tracker is an online platform for organizing your personal' +
                                 ' or work tasks which can help manage tasks effectively and improve time management.'}/>
                </div>
                </Zoom>
            </div>
        </div>
    );
}



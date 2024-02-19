import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg';
import helloImage from './../assets/image/SN.jpg';
import cardImage from './../assets/image/card.jpg'
import Fade from 'react-reveal/Fade';

export const Projects = () => {

    const todo = {
        backgroundImage: `url(${todoImage})`
    };

    const hello = {
        backgroundImage: `url(${helloImage})`
    };

    const card = {
        backgroundImage: `url(${cardImage})`
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Fade bottom>
                    <Title text={'Projects'} primaryText={'visit my portfolio and keep your feedback'}/>
                </Fade>
                <div className={style.projects}>
                    <Project style={hello} title={'Social network'}
                             description={'Social Network is an online platform that allows people to create an account and interact with other people on the website.'}/>

                    <Project style={card} title={'Flashcards'}
                             description={'Flashcards is an online platform for creating your own flashcards for learning and memorization.' +
                                 ' Cards can be for learning foreign words, cards on programming or any other subject or topic.'}/>
                    <Project style={todo} title={'Task tracker'}
                             description={'Task tracker is an online platform for organizing your personal' +
                                 ' or work tasks which can help manage tasks effectively and improve time management.'}/>

                </div>
            </div>
        </div>
    );
}



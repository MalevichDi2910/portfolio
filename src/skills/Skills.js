import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit....'}/>
                    <Skill title={'CSS'} description={'Maecenas quis neque a nibh commodo luctus id vitae odio, lsl ggls'}/>
                    <Skill title={'React'} description={'Vivamus interdum massa a purus ornare, sit amet '}/>
                </div>
            </div>
        </div>
    );
}


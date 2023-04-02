import React from "react";
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>

            <Link activeClass={style.active}
                to="main"
                smooth={true}
                offset={1}
                duration={500}
            >HOME</Link>

            <a href="">ABOUT</a>

            <Link activeClass={style.active}
                  to="skills"
                  smooth={true}
                  offset={1}
                  duration={500}
            >SKILLS</Link>

            <Link
                activeClass={style.active}
                to="projects"
                smooth={true}
                offset={1}
                duration={500}
            >PROJECTS</Link>

            <Link activeClass={style.active}
                  to="contacts"
                  smooth={true}
                  offset={1}
                  duration={500}
            >CONTACTS</Link>
        </div>
    );
}

import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";

export const BurgerNav = () => {

    const [menuIsOpen, setBurgerMenu] = useState(false)

    const onBurgerBtnClick = () => {
        setBurgerMenu(!menuIsOpen)
    }


    return (
        <div className={style.burgerNav}>
            <div className={ menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems} >
                <Link activeClass={style.active}
                      to="main"
                      smooth={true}
                      offset={1}
                      duration={500}
                >HOME</Link>

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
            <div className={style.burgerBtn} onClick={onBurgerBtnClick}>
                <span className="tri_poloski ">☰</span>
            </div>
        </div>
    );
}

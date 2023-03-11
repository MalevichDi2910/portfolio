import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <span>Contact</span>
                <h2 className={style.title}>Contact With Me</h2>
                <form className={style.contactsForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}


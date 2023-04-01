import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <span>Contact</span>
                <Title text={'Contact With Me'}/>
                <form className={style.contactsForm}>
                    <div className={style.blockInfo}>
                            <div>
                                <label>Your name</label>
                            </div>
                            <div>
                                <input className={style.formArea} type={'text'}/>
                            </div>
                    </div>
                    <div className={style.blockInfo}>
                            <div>
                                <label>Phone number</label>
                            </div>
                            <div>
                                <input className={style.formArea} type={'text'}/>
                            </div>
                    </div>
                    <div className={style.blockInfo}>
                            <div>
                                <label>Email</label>
                            </div>
                            <div>
                                <input className={style.formArea} type={'email'}/>
                            </div>
                    </div>
                    <div className={style.blockInfo}>
                            <div>
                                <label>Your message</label>
                            </div>
                            <textarea className={style.messageArea}/>
                    </div>
                    <div className={style.blockInfo}>
                        <button className={style.button}>Send message</button>
                    </div>

                </form>

            </div>
        </div>
    );
}


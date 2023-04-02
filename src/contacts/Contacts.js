import React from "react";
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Fade bottom>
                <span>Contact</span>
                <Title text={'Contact With Me'}/>
                </Fade>
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


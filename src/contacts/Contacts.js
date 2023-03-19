import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <span>Contact</span>
                <Title text={'Contact With Me'}/>
                <form className={style.contactsForm}>
                    <div className={style.blockInfo}>
                        <div>
                            <div>
                                <label>Your name</label>
                            </div>
                            <div>
                                <input type={'text'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <div>
                                <label>Phone number</label>
                            </div>
                            <div>
                                <input type={'text'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <div>
                                <label>Email</label>
                            </div>
                            <div>
                                <input type={'text'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <div>
                                <label>Your message</label>
                            </div>
                            <textarea/>
                        </div>
                    </div>
                    <button className={style.button}>Send message</button>
                </form>

            </div>
        </div>
    );
}


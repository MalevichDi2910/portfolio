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
                    <div className={style.blockInfo}>
                        <div>
                            <label>Your name</label>
                            <span>
                                 <input type={'text'}/>
                            </span>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <label>Phone number</label>
                            <span>
                                 <input type={'text'}/>
                            </span>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <label>Email</label>
                            <span>
                                 <input type={'text'}/>
                            </span>
                        </div>
                    </div>
                    <div className={style.blockInfo}>
                        <div>
                            <label>Your message</label>
                            <textarea/>
                        </div>
                    </div>
                </form>
                <button className={style.button}>Send message</button>
            </div>
        </div>
    );
}


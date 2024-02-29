import style from './Contacts.module.scss';
import {useContactForm} from "./hooks/useContactForm"
import {Title} from "../common/components/title/Title";
import {SnackBar} from "../common/components/snackBar/SnackBar";

export const Contacts = () => {
    const { formik, onDisabled, snackbarShow, snackbarType, snackbarMessage,errors, touched } = useContactForm()
    const sendEmail = (e) => {
        e.preventDefault();
        formik.handleSubmit(e)
    };
    return   <div id='contacts' className={style.contactsBlock}>
        <div className={style.contactsContainer}>
            <span>Contact</span>
            <Title text={'Contact With Me'}/>
            <form className={style.contactsForm} onSubmit={sendEmail}>
                <div className={style.blockInfo}>
                    <label>Name</label>
                    <input
                        id={"name"}
                        name={"name"}
                        className={style.formArea}
                        value={formik.values.name}
                        type={"text"}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name &&
                        <div className={style.error}>{formik.errors.name}</div>}
                </div>


                <div className={style.blockInfo}>
                    <label>Email</label>
                    <input
                        id={"email"}
                        name={"email"}
                        className={style.formArea}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email &&
                        <div className={style.error}>{formik.errors.email}</div>}
                </div>


                <div className={style.blockInfo}>
                    <label>Message</label>
                    <textarea
                        name={"message"}
                        id={"message"}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        className={style.messageArea}
                    />
                    {formik.errors.message && formik.touched.message &&
                        <div className={style.error}>{formik.errors.message}</div>}
                </div>


                <div className={style.blockInfo}>
                    <button type={"submit"} className={style.button} disabled={onDisabled}>
                        Send message
                    </button>
                </div>
            </form>
            <SnackBar show={snackbarShow} type={snackbarType} message={snackbarMessage}/>
        </div>
    </div>
}


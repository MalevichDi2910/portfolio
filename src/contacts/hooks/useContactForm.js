import {useFormik} from "formik";
import {useState} from "react";
import {EMAIL_SERVICE} from "../../common/constants/constants";
import emailjs from "@emailjs/browser";
import {validationSchema} from "../../common/utils/formValidator";
import { toFormikValidationSchema } from "zod-formik-adapter"

export const useContactForm = () => {
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [snackbarShow, setSnackbarShow] = useState(false)
    const [snackbarType, setSnackbarType] = useState('success')
    const [onDisabled, setOnDisabled] = useState(false)


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema:  toFormikValidationSchema(validationSchema),
        onSubmit: (values, actions) => {
            setOnDisabled(true)
            emailjs.send(EMAIL_SERVICE.serviceID, EMAIL_SERVICE.templateID, {
                name: values.name,
                email: values.email,
                message: values.message
            }, EMAIL_SERVICE.publicKey)
                .then((res) => {
                    setSnackbarMessage('Your message has been sent successfully')
                    setSnackbarType('success')
                    actions.resetForm()
                })
                .catch((e) => {
                    setSnackbarMessage('Something went wrong. Your message could not be sent')
                    setSnackbarType('error')
                })
                .finally(() => {
                    setSnackbarShow(true)
                    setOnDisabled(false)
                })
        },
    });
    return {formik, onDisabled, snackbarShow, snackbarType, snackbarMessage}
}
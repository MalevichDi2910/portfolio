import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const GlobalToast = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};
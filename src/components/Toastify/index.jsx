import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function MyToasty() {
    return (
        <>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default MyToasty;
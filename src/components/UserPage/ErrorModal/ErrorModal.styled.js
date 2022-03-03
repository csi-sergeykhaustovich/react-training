import ReactDOM from 'react-dom';
import Backdrop from "../Backdrop/Backdrop.styled";
import ModalOverlay from "../ModalOverlay/ModalOverlay.styled";

const ErrorModal = (props) => {
    const { title, message, onConfirm } = props;

    return (
        <>
            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={onConfirm}/>,
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={title}
                        message={message}
                        onConfirm={onConfirm}
                    />,
                    document.getElementById('modal-root')
                )
            }
        </>
    );
}

export default ErrorModal;

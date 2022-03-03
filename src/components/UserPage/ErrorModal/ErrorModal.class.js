import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from "../Backdrop/Backdrop";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

class ErrorModal extends React.Component {
    render () {
        const { title, message, onConfirm } = this.props;

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
}

export default ErrorModal;

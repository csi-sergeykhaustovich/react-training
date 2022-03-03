import React from 'react';
import Card from "../Card/Card";
import styles from "./ModalOverlay.module.css";
import Button from "../Button/Button";

class ModalOverlay extends React.Component {
    render () {
        const { title, message, onConfirm } = this.props;
        const { modal, header, content, actions } = styles;

        return (
            <Card className={modal}>
                <header className={header}>
                    <h2>{title}</h2>
                </header>
                <div className={content}>
                    <p>{message}</p>
                </div>
                <footer className={actions}>
                    <Button onClick={onConfirm}>Ok</Button>
                </footer>
            </Card>
        );
    }
}

export default ModalOverlay;

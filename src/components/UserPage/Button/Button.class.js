import React from "react";
import styles from "./Backdrop.module.css";

const DEFAULT_TYPE = 'button';

class Button extends React.Component {
    render () {
        const { type, onClick, children } = this.props;
        const { button } = styles;

        return <button
            className={button}
            type={type || DEFAULT_TYPE}
            onClick={onClick}
        >{children}</button>
    }
}

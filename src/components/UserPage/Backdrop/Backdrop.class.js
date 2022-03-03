import React from "react";
import styles from "./Backdrop.module.css";

class Backdrop extends React.Component {
    render () {
        return <div className={styles.backdrop} onClick={this.props.onConfirm}/>
    }
}

export default Backdrop;

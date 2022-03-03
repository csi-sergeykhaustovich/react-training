import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
    const { onConfirm } = props;
    const { backdrop } = styles;

    return <div className={backdrop} onClick={onConfirm}/>
}

export default Backdrop;

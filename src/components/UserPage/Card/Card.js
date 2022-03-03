import styles from './Card.module.css';

const Card = (props) => {
    const { className, children } = props;
    const { card } = styles;

    return <div className={`${card} ${className}`} style={props.style}>{children}</div>
}

export default Card;

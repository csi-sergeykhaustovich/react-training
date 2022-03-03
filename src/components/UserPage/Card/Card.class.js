import React from 'react';
import styles from './Card.module.css';

class Card extends React.Component {
    render () {
        const { className, children } = this.props;
        const { card } = styles;

        return <div className={`${card} ${className}`}>{children}</div>
    }
}

export default Card;

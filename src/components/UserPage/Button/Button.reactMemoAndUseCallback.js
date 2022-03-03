import React from 'react';
import styles from './Button.module.css';

const DEFAULT_TYPE = 'button';

const Button = props => {
    console.log('call Button');

    const { type, onClick, disabled, children } = props;
    const { button } = styles;

    return <button
        className={button}
        type={type || DEFAULT_TYPE}
        onClick={onClick}
        disabled={disabled}
    >{children}</button>
}

// export default Button;
export default React.memo(Button);

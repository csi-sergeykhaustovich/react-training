import './UserData.css';
import Card from '../Card/Card';
import React, { useState } from 'react';

const UserData = (props) => {
    const [ firstName, setFirstName ] = useState(props.firstName);
    const [ lastName, setLastName ] = useState(props.lastName);

    const clickHandler = () => {
        const newFirstName = `${firstName}_new`;
        const newLastName = `${lastName}_new`;

        setFirstName(newFirstName);
        setLastName(`${lastName}_new`);

        console.log('newFirstName', newFirstName);
        console.log('newLastName: ', newLastName);
    }

    return (
        <Card className="user-data-item">
            <div>{firstName} {lastName}</div>
            <button onClick={clickHandler}>Change</button>
        </Card>
    )
}

export default UserData;

import './UserData.css';
import Card from '../Card/Card';
import React from 'react';

const UserData = ({
   firstName,
   lastName,
}) => {
    return (
        <Card className="user-data-item">
            <div>{firstName} {lastName}</div>
        </Card>
    )
/*
    return (
        React.createElement(Card,{ className: 'user-data-item' },
            React.createElement('div', {}, `${firstName} ${firstName}`)
        )
    )
*/
}

export default UserData;

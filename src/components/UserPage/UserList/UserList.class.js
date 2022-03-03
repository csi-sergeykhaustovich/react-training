import React from 'react';
import styles from './UserList.module.css';
import Card from '../Card/Card';

class UserList extends React.Component {
    render () {
        const { users } = this.props;

        return (
            <Card className={styles.users}>
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>
                                {user.name} {user.salary}$
                            </li>
                        ))
                    }
                </ul>
            </Card>
        )
    }
}

export default UserList;

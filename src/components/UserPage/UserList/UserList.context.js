import React, { useContext } from "react";
import styles from './UserList.module.css';
import Card from '../Card/Card';
import UsersListContext from "../../../context/UsersListContext";

/*const UserList = () => {
    return (
        <Card className={styles.users}>
            <ul>
                <UsersListContext.Consumer>
                {
                    (usersList) => {
                        return usersList.map(user => (
                            <li key={user.id}>
                                {user.name} {user.salary}$
                            </li>
                        ))
                    }
                }
                </UsersListContext.Consumer>
            </ul>
        </Card>
    )
}*/

const UserList = () => {
    const usersList = useContext(UsersListContext);

    return (
        <Card className={styles.users}>
            <ul>
                {
                    usersList.map(user => (
                        <li key={user.id}>
                            {user.name} {user.salary}$
                        </li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default UserList;

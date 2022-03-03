import { useState } from 'react';
import NewUser from "./NewUse/NewUser";
import UserList from "./UserList/UserList";
import Button from "./Button/Button";

const UsersPage = () => {
    const [usersList, setUsersList] = useState([]);
    const [isChecked, setIsChecked] = useState([false]);

    const addUserHandler = (name, salary) => {
        setUsersList(prevState => ([
            ...prevState,
            {
                id: Math.random().toString(),
                name,
                salary,
            }
        ]))
    }

    const buttonClickHandler = () => {
        setIsChecked(prevState => !prevState);
    }

    console.log('call UsersPage');

    return (
        <>
            <span style={{color:"white"}}> Click me </span>
            <Button onClick={buttonClickHandler}>{ isChecked ? '+++' : '----' }</Button>
            <NewUser onAddUser={addUserHandler}/>
            <UserList users={usersList} />
        </>
    );
}

export default UsersPage;

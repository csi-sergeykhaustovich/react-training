import { useState } from 'react';
import NewUser from "./NewUse/NewUser.reactMemoAndUseCallback";
import UserList from "./UserList/UserList";

const UsersPage = () => {
    const [usersList, setUsersList] = useState([]);

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

    return (
        <>
            <NewUser onAddUser={addUserHandler}/>
            <UserList users={usersList} />
        </>
    );
}

export default UsersPage;

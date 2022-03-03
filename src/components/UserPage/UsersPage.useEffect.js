import { useState, useEffect } from 'react';
import NewUser from "./NewUse/NewUser.useEffect";
import UserList from "./UserList/UserList";

const time = (seconds) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

function DataBase () {
    const data = [
        {
            id: Math.random().toString(),
            name: 'Tom',
            salary: 100,
        },
        {
            id: Math.random().toString(),
            name: 'Kate',
            salary: 200,
        },
    ];

    const addUser = async (name, salary) => {
        await time(1);
        return [
            ...data,
            {
                id: Math.random().toString(),
                name,
                salary,
            }
        ];
    };

    const getUsersList = async () => {
        await time(3);
        return Promise.resolve(data);
    }

    return { addUser, getUsersList };
}

const db = DataBase();

const UsersPage = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        db.getUsersList().then(setUsersList);
    }, []);

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

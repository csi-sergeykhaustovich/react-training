import { useState } from 'react';
import UserDataList from "./UserDataList/UserDataList";
import UserDataForm from "./UserDataForm/UserDataForm";

const DEFAULT_USER_DATA = [
    { id: Math.random().toString(16), firstName: 'Peter', lastName: 'White'},
    { id: Math.random().toString(16), firstName: 'Bob', lastName: 'Lee'},
    { id: Math.random().toString(16), firstName: 'Marty', lastName: 'Wood'},
];

const Part2ComponentsAndProps = () => {
    const [ userDataList, setUserDataList ] = useState(DEFAULT_USER_DATA);
    console.log(userDataList);
    const onSaveUserData = (inputUserData) => {
        console.log('inputUserData: ', inputUserData);
        const newUserData = {
            id: Math.random().toString(16),
            ...inputUserData
        }
        setUserDataList((prevState => {
            return [newUserData, ...prevState]
        }));
    }

    return (
        <div>
            <UserDataForm onSaveUserData={onSaveUserData} />
            <UserDataList data={userDataList}/>
        </div>
    );
};

export default Part2ComponentsAndProps;


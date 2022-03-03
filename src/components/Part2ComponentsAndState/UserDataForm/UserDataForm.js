import { useState } from "react";
import './UserDataForm.css';

const UserDataForm = (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);
    console.log('-------------');

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = { firstName, lastName };

        props.onSaveUserData(userData);

        setFirstName('');
        setLastName('');

        console.log('userData: ', userData);
    }

    return (
        <div className="user-data-form">
            <form onSubmit={submitHandler}>
                <div className="user-data-form__controls">
                    <div className="user-data-form__control">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={firstNameChangeHandler}/>
                    </div>
                    <div className="user-data-form__control">
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={lastNameChangeHandler}/>
                    </div>
                </div>
                <div className="user-data-form__actions">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
};
/*
const UserDataForm = () => {
    const [ userData, setUserData ] = useState({
        firstName: '',
        lastName: '',
    });

    console.log('firstName: ', userData.firstName);
    console.log('lastName: ', userData.lastName);
    console.log('-------------');

    const firstNameChangeHandler = (event) => {
        setUserData({
            ...userData,
            firstName: event.target.value,
        });
    };

    const lastNameChangeHandler = (event) => {
        setUserData({
            ...userData,
            lastName: event.target.value,
        });
    };

    const firstNameChangeHandler = (event) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                firstName: event.target.value
            };
        });
    };

    const lastNameChangeHandler = (event) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                lastName: event.target.value,
            }
        });
    };

    return (
        <div className="user-data-form">
            <form>
                <div className="user-data-form__controls">
                    <div className="user-data-form__control">
                        <label>First Name</label>
                        <input type="text" onChange={firstNameChangeHandler}/>
                    </div>
                    <div className="user-data-form__control">
                        <label>Last Name</label>
                        <input type="text" onChange={lastNameChangeHandler}/>
                    </div>
                </div>
                <div className="user-data-form__actions">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
};*/

export default UserDataForm;

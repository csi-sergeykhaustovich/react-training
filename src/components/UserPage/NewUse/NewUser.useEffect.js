import { useState, useEffect } from 'react';
import styles from './NewUser.module.css';
import Card from "../Card/Card";
import Button from "../Button/Button";

const NewUser = props => {
    const [ userName, setUserName ] = useState('');
    const [ salary, setSalary ] = useState('');
    const [ isUserNameValid, setUserNameIsValid ] = useState(true);
    const [ isSalaryValid, setSalaryIsValid ] = useState(true);
    const [ isFormValid, setFormIsValid ] = useState(false);

    const validateUserNameHandler = () => {
        setUserNameIsValid(
            userName.trim().length > 0
        );
    };

    const validateSalaryHandler = () => {
        setSalaryIsValid(
            salary.trim().length > 0 && Number(salary) > 0
        );
    };

    // useEffect(() => { console.log('useEffect call') });
    // useEffect(() => { console.log('useEffect call') }, []);
    // useEffect(() => { console.log('useEffect call') }, [userName]);

    useEffect(() => {
        setFormIsValid(
            userName.trim().length > 0 && salary.trim().length > 0 && Number(salary) > 0
        );
    }, [userName, salary]);

    /*useEffect(() => {
        const timeout = setTimeout(() => {
            setFormIsValid(
                userName.trim().length > 0 && salary.trim().length > 0 && Number(salary) > 0
            );
        }, 300);

        return () => {
            clearTimeout(timeout);
        }
    }, [userName, salary]);*/

    const userNameChangeHandler = (event) => setUserName(event.target.value);

    const salaryChangeHandler = (event) => setSalary(event.target.value);

    const createUserHandler = (event) => {
        event.preventDefault();

        props.onAddUser(userName, salary);

        setUserName('');
        setSalary('');
    }

    // console.log('render call');

    return (
        <Card className={styles.input}>
            <form onSubmit={createUserHandler}>
                <label htmlFor="username">User</label>
                <input
                    id="username"
                    type="text"
                    value={userName}
                    className={isUserNameValid ? '' : styles.invalid}
                    onChange={userNameChangeHandler}
                    onBlur={validateUserNameHandler}
                />

                <label htmlFor="salary">Salary</label>
                <input
                    id="salary"
                    type="number"
                    value={salary}
                    className={isSalaryValid ? '' : styles.invalid}
                    onChange={salaryChangeHandler}
                    onBlur={validateSalaryHandler}
                />

                <Button type="submit" disabled={!isFormValid}>Add User</Button>
            </form>
        </Card>
    )
};

export default NewUser;

import { useState, useCallback } from 'react';
import styles from './NewUser.module.css';
import Card from "../Card/Card";
import Button from "../Button/Button.reactMemoAndUseCallback";
import ErrorModal from "../ErrorModal/ErrorModal";

const NewUser = props => {
    const [ userName, setUserName ] = useState('');
    const [ salary, setSalary ] = useState('');
    const [ error, setError ] = useState(null);

    const userNameChangeHandler = (event) => setUserName(event.target.value);

    const salaryChangeHandler = (event) => setSalary(event.target.value);

    const errorHandler = () => setError(null);

    const createUserHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || salary.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and salary (non-empty value).'
            });
            return;
        }

        if (Number(salary) < 0) {
            setError({
                title: 'invalid salary',
                message: 'Please enter a valid salary (> 0).'
            });
            return;
        }

        props.onAddUser(userName, salary);

        setUserName('');
        setSalary('');
    }

    // const clickButtonHandler = () => { };
    const clickButtonHandler = useCallback(() => { }, []);

    return (
        <>
            {
                error && <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="username">User</label>
                    <input
                        id="username"
                        type="text"
                        value={userName}
                        onChange={userNameChangeHandler}
                    />

                    <label htmlFor="salary">Salary</label>
                    <input
                        id="salary"
                        type="number"
                        value={salary}
                        onChange={salaryChangeHandler}
                    />

                    <Button type="submit" onClick={clickButtonHandler}>Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default NewUser;

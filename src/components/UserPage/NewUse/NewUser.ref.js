import { useState, useRef } from 'react';
import styles from './NewUser.module.css';
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const NewUser = props => {
    const { onAddUser } = props;
    const { input } = styles;

    const userNameRef = useRef();
    const salaryRef = useRef();

    const [ error, setError ] = useState(null);

    const errorHandler = () => setError(null);

    const createUserHandler = (event) => {
        event.preventDefault();

        const _userName = userNameRef.current.value;
        const _salary = salaryRef.current.value;

        if (_userName.trim().length === 0 || _salary.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and salary (non-empty value).'
            });
            return;
        }

        if (Number(_salary) < 0) {
            setError({
                title: 'invalid salary',
                message: 'Please enter a valid salary (> 0).'
            });
            return;
        }

        onAddUser(_userName, _salary);
        userNameRef.current.value = '';
        salaryRef.current.value = ''
    }

    return (
        <>
            {
                error && <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="username">User</label>
                    <input
                        id="username"
                        type="text"
                        ref={userNameRef}
                    />

                    <label htmlFor="salary">Salary</label>
                    <input
                        id="salary"
                        type="number"
                        ref={salaryRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default NewUser;

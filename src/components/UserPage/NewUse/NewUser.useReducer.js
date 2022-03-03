import { useReducer } from 'react';
import styles from './NewUser.module.css';
import Card from "../Card/Card";
import Button from "../Button/Button";

const initialUserState = {
    userName: '',
    isUserNameValid: null,
    salary: '',
    isSalaryValid: null,
    isFormValid: false,
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_USER_NAME': {
            const isUserNameValid = action.payload.trim().length > 0;
            return {
                ...state,
                userName: action.payload,
                isUserNameValid,
                isFormValid: isUserNameValid && state.isSalaryValid,
            };
        }
        case 'BLUR_USER_NAME': {
            return {
                ...state,
                isUserNameValid: state.userName.trim().length > 0,
            };
        }
        case 'CHANGE_SALARY': {
            const isSalaryValid = action.payload.trim().length > 0 && Number(action.payload) > 0;
            return {
                ...state,
                salary: action.payload,
                isSalaryValid,
                isFormValid: isSalaryValid && state.isUserNameValid,
            };
        }
        case 'BLUR_SALARY': {
            return {
                ...state,
                isSalaryValid: state.salary.trim().length > 0 && Number(state.salary) > 0,
            }
        }
        case 'CLEAR_FORM': {
            return initialUserState;
        }
        default: {
            return initialUserState;
        }
    }
}

const NewUser = props => {
    const [ userState, dispatchUser ] = useReducer(userReducer, initialUserState);

    const validateUserNameHandler = () => dispatchUser({ type: 'BLUR_USER_NAME' });

    const validateSalaryHandler = () => dispatchUser({ type: 'BLUR_SALARY' });

    const userNameChangeHandler = (event) => dispatchUser({ type: 'CHANGE_USER_NAME', payload: event.target.value });

    const salaryChangeHandler = (event) => dispatchUser({ type: 'CHANGE_SALARY', payload: event.target.value });

    const createUserHandler = (event) => {
        event.preventDefault();
        props.onAddUser(userState.userName, userState.salary);
        dispatchUser({ type: 'CLEAR_FORM' });
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={createUserHandler}>
                <label htmlFor="username">User</label>
                <input
                    id="username"
                    type="text"
                    value={userState.userName}
                    className={userState.isUserNameValid === false ? styles.invalid : '' }
                    onChange={userNameChangeHandler}
                    onBlur={validateUserNameHandler}
                />

                <label htmlFor="salary">Salary</label>
                <input
                    id="salary"
                    type="number"
                    value={userState.salary}
                    className={userState.isSalaryValid === false ? styles.invalid : ''}
                    onChange={salaryChangeHandler}
                    onBlur={validateSalaryHandler}
                />

                <Button type="submit" disabled={!userState.isFormValid}>Add User</Button>
            </form>
        </Card>
    )
};

export default NewUser;

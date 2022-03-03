import styled from 'styled-components';
import { useState } from 'react';
import Card from "../Card/Card.styled";
import Button from "../Button/Button.styled";
import ErrorModal from "../ErrorModal/ErrorModal.styled";

const StyledCard = styled(Card)`
  background: ${props => props.error ? "grey" : "white"};
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`

const NewUser = props => {
    const { onAddUser } = props;

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

        onAddUser(userName, salary);

        setUserName('');
        setSalary('');
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
            <StyledCard error={error}>
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

                    <Button type="submit">Add User</Button>
                </form>
            </StyledCard>
        </>
    )
};

export default NewUser;

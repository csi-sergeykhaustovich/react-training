import React from 'react';
import styles from './NewUser.module.css';
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

class NewUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            salary: '',
            error: null,
        };

        this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
        this.salaryChangeHandler = this.salaryChangeHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.createUserHandler = this.createUserHandler.bind(this);
    }

    userNameChangeHandler (event) {
        console.log(this);
        this.setState({ userName: event.target.value });
    }

    salaryChangeHandler (event) {
        this.setState({ salary: event.target.value });
    }

    errorHandler () {
        this.setState({ error: null });
    }

    createUserHandler (event) {
        event.preventDefault();

        if (this.state.userName.trim().length === 0 || this.state.salary.trim().length === 0) {
            this.setState({
                error: {
                    title: 'invalid input',
                    message: 'Please enter a valid name and salary (non-empty value).'
                }
            });
            return;
        }

        if (Number(this.state.salary) < 0) {
            this.setState({
                error: {
                    title: 'invalid salary',
                    message: 'Please enter a valid salary (> 0).'
                }
            });
            return;
        }

        this.props.onAddUser(this.state.userName, this.state.salary);

        this.setState({
            userName: '',
            salary: '',
        });
    }

    render () {
        const { error, userName, salary } = this.state;

        return (
            <>
                {
                    error && <ErrorModal
                        title={error.title}
                        message={error.message}
                        onConfirm={this.errorHandler}
                    />
                }
                <Card className={styles.input}>
                    <form onSubmit={this.createUserHandler}>
                        <label htmlFor="username">User</label>
                        <input
                            id="username"
                            type="text"
                            value={userName}
                            onChange={this.userNameChangeHandler}
                        />

                        <label htmlFor="salary">Salary</label>
                        <input
                            id="salary"
                            type="number"
                            value={salary}
                            onChange={this.salaryChangeHandler}
                        />

                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
            </>
        )
    }
};

export default NewUser;

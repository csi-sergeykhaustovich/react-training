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

        this.userNameRef = React.createRef();
        this.setSalaryRef = element => {
            this.salaryRef = element;
        };

        this.errorHandler = this.errorHandler.bind(this);
        this.createUserHandler = this.createUserHandler.bind(this);
    }

    errorHandler () {
        this.setState({ error: null });
    }

    createUserHandler (event) {
        event.preventDefault();

        const _userName = this.userNameRef.current.value;
        const _salary = this.salaryRef.value;

        if (_userName.trim().length === 0 || _salary.trim().length === 0) {
            this.setState({
                error: {
                    title: 'invalid input',
                    message: 'Please enter a valid name and salary (non-empty value).'
                }
            });
            return;
        }

        if (Number(_salary) < 0) {
            this.setState({
                error: {
                    title: 'invalid salary',
                    message: 'Please enter a valid salary (> 0).'
                }
            });
            return;
        }

        this.props.onAddUser(_userName, _salary);

        this.userNameRef.current.value = '';
        this.salaryRef.value = '';
    }

    render () {
        const { error } = this.state;

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
                            ref={this.userNameRef}
                        />

                        <label htmlFor="salary">Salary</label>
                        <input
                            id="salary"
                            type="number"
                            ref={this.setSalaryRef}
                        />

                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
            </>
        )
    }
};

export default NewUser;

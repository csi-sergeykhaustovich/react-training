import styles from './UserList.module.css';
import Card from '../Card/Card';

const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {
                    props.users.map(user => (
                        <li key={user.id}>
                            {user.name} {user.salary}$
                        </li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default UserList;

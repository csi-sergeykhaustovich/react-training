import UserData from '../UserData/UserData';
import Card from '../Card/Card';
import './UserDataList.css';

const UserDataList = ({ data }) => (
    <Card className='user-data-list'>
        {
            data.map(
                ({ id, firstName, lastName }) =>
                    <UserData
                        key={id}
                        firstName={firstName}
                        lastName={lastName}
                    />
            )
        }
    </Card>
)

export default UserDataList;

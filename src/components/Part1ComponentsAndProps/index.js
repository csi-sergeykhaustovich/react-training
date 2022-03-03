import UserDataList from "./UserDataList/UserDataList";

const data = [
    { id: Math.random().toString(16), firstName: 'Peter', lastName: 'White'},
    { id: Math.random().toString(16), firstName: 'Bob', lastName: 'Lee'},
    { id: Math.random().toString(16), firstName: 'Marty', lastName: 'Wood'},
];

const Part1ComponentsAndProps = () => <UserDataList data={data}/>;

export default Part1ComponentsAndProps;



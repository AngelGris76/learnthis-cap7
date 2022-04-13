import UserRow from './UserRow';

const UsersListRows = ({ users, setActiveState }) => {
  if (!users.length) {
    return <p>No hay usuarios</p>;
  }
  return users.map((user) => (
    <UserRow key={user.id} {...user} setActiveState={setActiveState} />
  ));
};

export default UsersListRows;

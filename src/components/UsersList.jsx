import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsesrsList = ({ users, children }) => {
  const usersRendered = users.map((user) => (
    <UserRow key={user.name} {...user} />
  ));

  return (
    <div className={style.usersList}>
      {children}
      {usersRendered}
    </div>
  );
};

export default UsesrsList;

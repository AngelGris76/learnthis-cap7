import UserRow from './UserRow';

const UsesrsList = ({ users, children }) => {
  const usersRendered = users.map((user) => (
    <UserRow key={user.name} {...user} />
  ));

  return (
    <div className='list'>
      {children}
      {usersRendered}
    </div>
  );
};

export default UsesrsList;

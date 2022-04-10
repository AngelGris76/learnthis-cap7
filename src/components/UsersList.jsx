import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsesrsList = ({ users }) => {
  const [search, setSearch] = useState('');

  const usersFiltered = filterUsersByName(users, search);
  const usersRendered = renderUsers(usersFiltered);

  return (
    <div className={style.usersList}>
      <h1>Listado de usuarios</h1>
      <input
        type='text'
        name='search'
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
      />

      {usersRendered}
    </div>
  );
};

const filterUsersByName = (users, search) => {
  /*
  const filteredUsers = search
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(insensitiveSearch)
      )
    : users;

  return filteredUsers;
  */

  if (!search) {
    return users;
  }

  const insensitiveSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(insensitiveSearch)
  );
};

const renderUsers = (users) => {
  /*
  const usersRendered =
    users.length > 0 ? (
      users.map((user) => <UserRow key={user.name} {...user} />)
    ) : (
      <p>No hay usuarios</p>
    );

  return usersRendered;
  */

  if (!users.length) {
    return <p>No hay usuarios</p>;
  }

  return users.map((user) => <UserRow key={user.name} {...user} />);
};

export default UsesrsList;

import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsesrsList = ({ users }) => {
  const [search, setSearch] = useState('');

  const usersRendered = filterAndRenderUsers(users, search);

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

const filterAndRenderUsers = (users, search) => {
  const insensitiveSearch = search.toLowerCase();

  const filteredUsers = search
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(insensitiveSearch)
      )
    : users;
  return filteredUsers.map((user) => <UserRow key={user.name} {...user} />);
};

export default UsesrsList;

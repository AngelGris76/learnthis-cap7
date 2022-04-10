import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsesrsList = ({ users, children }) => {
  const [search, setSearch] = useState('');

  const insensitiveSearch = search.toLowerCase();

  const usersFiltered = search
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(insensitiveSearch)
      )
    : users;

  const usersRendered = usersFiltered.map((user) => (
    <UserRow key={user.name} {...user} />
  ));

  return (
    <div className={style.usersList}>
      {children}

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

export default UsesrsList;

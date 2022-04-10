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
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch(ev.target.search.value);
        }}
      >
        <input type='text' name='search' defaultValue='' />
        <button type='submit'>Buscar</button>
      </form>
      {usersRendered}
    </div>
  );
};

export default UsesrsList;

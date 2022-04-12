import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import style from './UsersList.module.css';
import UsersListRows from './UsersListRows';

const UsesrsList = ({ users }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(false);
  const [order, setOrder] = useState(0);

  let usersFiltered = filterByActive(users, activeFilter);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = orderUsers(usersFiltered, order);

  return (
    <div className={style.usersList}>
      <h1>Listado de usuarios</h1>
      <UsersListFilters
        {...{
          search,
          setSearch,
          activeFilter,
          setActiveFilter,
          order,
          setOrder,
        }}
      />

      <UsersListRows users={usersFiltered} />
    </div>
  );
};

const filterByActive = (users, filter) => {
  if (!filter) {
    return [...users];
  }
  return users.filter((user) => user.active);
};

const filterUsersByName = (users, search) => {
  if (!search) {
    return [...users];
  }

  const insensitiveSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(insensitiveSearch)
  );
};

const orderUsers = (users, order) => {
  const copyUsers = [...users];

  switch (order) {
    case 1:
      return copyUsers.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
    default:
      return copyUsers;
  }
};

export default UsesrsList;

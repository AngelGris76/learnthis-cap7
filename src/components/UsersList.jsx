import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import style from './UsersList.module.css';
import UsersListRows from './UsersListRows';

const UsesrsList = ({ initialUsers }) => {
  const { search, activeFilter, order, setSearch, setActiveFilter, setOrder } =
    useFilter();

  const { users, setActive } = useUsers(initialUsers);

  let usersFiltered = filterByActive(users, activeFilter);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = orderUsers(usersFiltered, order);

  return (
    <div className={style.usersList}>
      <h1>Listado de usuarios</h1>
      <UsersListFilters
        search={search}
        setSearch={setSearch}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        order={order}
        setOrder={setOrder}
      />

      <UsersListRows users={usersFiltered} setActiveState={setActive} />
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

const useFilter = () => {
  const [filters, setFilters] = useState({
    search: '',
    activeFilter: false,
    order: 0,
  });

  const setSearch = (search) => {
    setFilters({ ...filters, search: search });
  };
  const setActiveFilter = (activeFilter) => {
    setFilters({ ...filters, activeFilter: activeFilter });
  };
  const setOrder = (order) => {
    setFilters({ ...filters, order: order });
  };

  return { ...filters, setSearch, setActiveFilter, setOrder };
};

const useUsers = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  const setActive = (id) => {
    const newUsers = [...users];

    const index = newUsers.findIndex((user) => user.id === id);
    newUsers[index].active = !newUsers[index].active;
    setUsers(newUsers);
  };

  return { users, setActive };
};

export default UsesrsList;

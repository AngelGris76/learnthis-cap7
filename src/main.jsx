import ReactDOM from 'react-dom';
// import App from './App';

const USERS = [
  { name: 'Pablo Castellanos', active: 'Activo', role: 'Profesor' },
  { name: 'Javier López', active: 'Activo', role: 'Alumno' },
  { name: 'Jose Miguel Fernandez', active: 'Activo', role: 'Profesor' },
];

const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

const User = ({ name, active, role }) => {
  return (
    <div className='user'>
      <span className='name'>{name}</span>
      <span className='active'>{active}</span>
      <span className='role'>{role}</span>
    </div>
  );
};

const List = ({ users, children }) => {
  const usersRendered = users.map((user) => <User key={user.name} {...user} />);

  return (
    <div className='list'>
      {children}
      {usersRendered}
    </div>
  );
};

const App = () => {
  return (
    <List users={USERS}>
      <Title>Listado de usuarios</Title>
    </List>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import UsesrsList from './components/UsersList';
import Title from './components/Title';

const USERS = [
  { name: 'Pablo Castellanos', active: true, role: 'teacher' },
  { name: 'Jose Miguel Fernandez', active: true, role: 'teacher' },
  { name: 'Javier López', active: false, role: 'student' },
];

const App = () => {
  return (
    <UsesrsList users={USERS}>
      <Title>Listado de usuarios</Title>
    </UsesrsList>
  );
};

export default App;

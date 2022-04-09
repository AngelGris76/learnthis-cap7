import UsesrsList from './components/UsersList';
import Title from './components/Title';

const USERS = [
  { name: 'Pablo Castellanos', active: 'Activo', role: 'Profesor' },
  { name: 'Javier López', active: 'Activo', role: 'Alumno' },
  { name: 'Jose Miguel Fernandez', active: 'Activo', role: 'Profesor' },
];

const App = () => {
  return (
    <UsesrsList users={USERS}>
      <Title>Listado de usuarios</Title>
    </UsesrsList>
  );
};

export default App;

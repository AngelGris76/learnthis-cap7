import UsesrsList from './components/UsersList';

const USERS = [
  { id: 0, name: 'Pablo Castellanos', active: true, role: 'teacher' },
  { id: 1, name: 'Jose Miguel Fernandez', active: true, role: 'teacher' },
  { id: 2, name: 'Javier López', active: false, role: 'student' },
];

const App = () => {
  return <UsesrsList initialUsers={USERS} />;
};

export default App;

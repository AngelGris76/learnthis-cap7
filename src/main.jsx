import ReactDOM from 'react-dom';
// import App from './App';

const Title = () => {
  return <h1>Listado de usuarios</h1>;
};

const User = (props) => {
  return (
    <div className='user'>
      <span className='name'>{props.name}</span>
      <span className='active'>{props.active}</span>
      <span className='role'>{props.role}</span>
    </div>
  );
};

const App = () => {
  return (
    <div className='list'>
      <Title />
      <User name='Pablo Castellanos' active='Activo' role='Profesor' />
      <User name='Jose Miguel Fernandez' active='Activo' role='Profesor' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

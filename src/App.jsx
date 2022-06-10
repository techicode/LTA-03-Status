import Title from './components/Title';
import UsersList from './components/UsersList';

const USERS = [
  { name: 'Pedro Esteban Paredes', status: true, type: 'user' },
  { name: 'Juan Pablo Pereira', status: true, type: 'moderador' },
  { name: 'Diego Glot Gamba', status: false, type: 'user' },
];

const App = () => {
  return (
    <div className='flex justify-center mt-5'>
      <UsersList users={USERS}>
        <Title>Listado de usuarios</Title>
      </UsersList>
    </div>
  );
};

export default App;

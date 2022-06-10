import UserRow from './UserRow';

const UsersList = ({ users, children }) => {
  const usersRendered =
    users.length > 0
      ? users.map((user) => <UserRow key={user.name} {...user} />)
      : 'No hay usuarios ';

  return (
    <div className='w-4/5 justify-center'>
      {children}
      {usersRendered}
    </div>
  );
};

export default UsersList;

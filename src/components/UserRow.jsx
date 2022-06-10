import { useState } from 'react';
import UserStatus from './UserStatus';
import UserType from './UserType';

const UserRow = ({ name, status, type }) => {
  const [userStatus, setUserStatus] = useState(status);

  return (
    <div class='flex justify-between border-2 border-blue-600 rounded-xl p-5 mx-5 my-2 w-full'>
      <div className='w-1/3'>{name}</div>
      <UserStatus status={userStatus} />
      <UserType type={type} />
      <div className='w-1/6 flex justify-center items-center'>
        <button
          onClick={() => {
            setUserStatus(!userStatus);
          }}
          className=' bg-cyan-600 px-4 rounded-lg shadow-md text-white'
        >
          {userStatus ? 'Desactivar' : 'Activar'}
        </button>
      </div>
    </div>
  );
};

export default UserRow;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';

const UsersList = () => {
  const users = useSelector(({ users: { data } }) => data);
  const isLoading = useSelector(({ users: { isLoading } }) => isLoading);
  const error = useSelector(({ users: { error } }) => error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addUser());
  };

  // Good old fashioned if statements work best for multiple return values
  if (isLoading) {
    return <Skeleton times={4} className='h-10 w-full m-2' />;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1>Media Matters</h1>
      <button className='bg-slate-500 py-2 px-4 rounded cursor-pointer hover:bg-slate-400' onClick={handleClick}>
        Add User
      </button>
      <div>
        {users &&
          users.map(({ id, name }) => (
            <div className='m-2 border rounded' key={id}>
              <div className='flex p-2 justify-between items-center cursor-pointer'>{name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersList;

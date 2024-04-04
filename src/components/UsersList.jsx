import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

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
      <div className='flex flex-row justify-between items-center py-3 px-2'>
        <h1 className='text-2xl'>Media Matters</h1>
        <Button primary rounded onClick={handleClick}>
          + Add User
        </Button>
      </div>
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

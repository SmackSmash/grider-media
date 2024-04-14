import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import useThunk from '../store/hooks/useThunk';
import Skeleton from './Skeleton';
import Button from './Button';

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);
  const users = useSelector(({ users: { data } }) => data);

  const dispatch = useDispatch();

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleClick = async () => {
    setIsCreatingUser(true);
    try {
      await dispatch(addUser()).unwrap();
    } catch (error) {
      setCreatingUserError(error);
    } finally {
      setIsCreatingUser(false);
    }
  };

  // Good old fashioned if statements work best for multiple return values
  if (isLoadingUsers) {
    return <Skeleton times={4} className='h-10 w-full m-2' />;
  }

  if (loadingUsersError) {
    return <div>{loadingUsersError.message}</div>;
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center py-3 px-2'>
        <h1 className='text-2xl'>Media Matters</h1>
        {creatingUserError && error.message}
        <Button primary rounded onClick={handleClick}>
          {isCreatingUser ? 'Spinner' : '+ Add User'}
        </Button>
      </div>
      <div>
        {users &&
          users.map(({ id, name }) => (
            <div className='m-2 border rounded' key={id}>
              <div className='flex p-2 justify-between items-center cursor-pointer'>
                {name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersList;

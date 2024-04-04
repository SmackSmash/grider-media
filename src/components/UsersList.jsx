import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

const UsersList = () => {
  const users = useSelector(({ users: { data } }) => data);
  const error = useSelector(({ users: { error } }) => error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>{users && !error ? users.map(({ id, name }) => <p key={id}>{name}</p>) : <p>Something went wrong</p>}</div>
  );
};

export default UsersList;

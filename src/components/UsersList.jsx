import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';

const UsersList = () => {
  const users = useSelector(({ users: { data } }) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>{users ? users.map(({ id, name }) => <p key={id}>{name}</p>) : 'Loading'}</div>;
};

export default UsersList;

import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useThunk(thunk) {
  const [isLoadingThunk, setIsLoadingThunk] = useState(false);
  const [loadingThunkError, setLoadingThunkError] = useState(null);

  const dispatch = useDispatch();

  const doThunk = async () => {
    setIsLoadingThunk(true);

    try {
      await dispatch(thunk()).unwrap();
    } catch (error) {
      setLoadingThunkError(error);
    } finally {
      setIsLoadingThunk(false);
    }
  };

  return [doThunk, isLoadingThunk, loadingThunkError];
}

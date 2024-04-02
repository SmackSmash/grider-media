import { useDispatch, useSelector } from 'react-redux';
import { addTest } from './store';

const App = () => {
  const test = useSelector(({ test }) => test);
  7;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTest());
  };

  return (
    <main className='p-8'>
      <h1 className='font-bold text-3xl'>App Works</h1>
      <button className='bg-lime-600 p-2 my-4 cursor-pointer hover:bg-lime-500' onClick={handleClick}>
        Add to test
      </button>
      {test.length ? test.map(entry => <p key={Math.random()}>{entry}</p>) : <p>No entries</p>}
    </main>
  );
};

export default App;

import List from './components/List';
import Form from './components/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './store/actions/todo'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <div>
      <Form />
      <List />
    </div>
  );
}

export default App;

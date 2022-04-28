import List from './components/List';
import Form from './components/Form';
import Product from './components/Product';
import ErrorFallback from './components/ErrorFallback';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './store/actions/todo'
import {ErrorBoundary} from 'react-error-boundary'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Product product={{name: 'Product 1'}}/>
        <Form />
        <List />
      </ErrorBoundary>
    </div>
  );
}

export default App;

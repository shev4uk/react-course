import './App.css';
import Item from './components/Item'
import Counter from './components/Counter'
import Todos from './components/todos/Todos'

function App() {
  const value = 4;
  return (
    <div>
      {value}
      <Item value={8} count={0}/>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;

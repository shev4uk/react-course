import useTodoList from '../hooks/useTodoList';
import TodoList from '../components/TodoList';

export default function TodoListPage() {
  const {list} = useTodoList();
  return (
    <div>
        <h2>todoListPage</h2>
        <TodoList todos={list}/>
    </div>
  )
}

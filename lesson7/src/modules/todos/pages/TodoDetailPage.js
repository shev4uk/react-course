import { useParams, useSearchParams } from 'react-router-dom';
import useTodo from '../hooks/useTodo';

export default function TodoDetailPage() {
  const {id} = useParams();
  const {todo} = useTodo(id);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('search'));
  return (
    <div>
        <h2>Detail Todo</h2>
        {todo.title}
    </div>
  )
}

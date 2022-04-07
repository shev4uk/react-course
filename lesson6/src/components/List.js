import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todo";
import "./List.css";

export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((item) => {
        return (
          <div
            className={item.completed ? 'item done': 'item'}
            key={item.id}
            onClick={() => dispatch(updateTodo(item))}
          >
            {item.title}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todo';

export default function Form() {
    const [newTitle, setNewTitle] = useState({title: ''});
    const dispatch = useDispatch();

    function onChangeHandler(e) {
      setNewTitle({title: e.target.value})
    }
    function onAddTodo(e) {
      e.preventDefault();
      dispatch(addTodo(newTitle));
    }
    return (
      <form onSubmit={onAddTodo}>
        <input type="text" value={newTitle.title} onChange={onChangeHandler} />
        <button>Add</button>
      </form>
    )
}

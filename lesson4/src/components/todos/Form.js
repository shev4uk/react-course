import React, { useState } from 'react'

export default function Form({onAdd}) {
  const [newTitle, setNewTitle] = useState({title: ''});
  function onChangeHandler(e) {
    setNewTitle({title: e.target.value})
  }
  function onAddTodo(e) {
    e.preventDefault();
    onAdd(newTitle.title);
  }
  return (
    <form onSubmit={onAddTodo}>
      <input type="text" value={newTitle.title} onChange={onChangeHandler} />
      <button>Add</button>
    </form>
  )
}

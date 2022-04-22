import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);

  function changeStatus(changedItem) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + changedItem.id, {
      method: "PUT",
      body: JSON.stringify({
        ...changedItem,
        completed: !changedItem.completed,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.map((item) =>
          item.id === changedItem.id
            ? { ...item, completed: !item.completed }
            : item
        );
        setTodos(newTodos);
      });
  }
  function deleteItem(id) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
      });
  }
  function addItem(title) {
    fetch("https://jsonplaceholder.typicode.com/todos/", {
      method: "POST",
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
      });
  }

  function searchItems(text) {
    console.log(text);
    console.log(todos.filter((item) => item.title.includes(text)));
    setTodos(todos.filter((item) => item.title.includes(text)));
  }

  return {
    todos,
    changeStatus,
    deleteItem,
    addItem,
    searchItems
  }
}

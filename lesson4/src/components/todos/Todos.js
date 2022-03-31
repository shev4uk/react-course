import React from "react";
import List from "./List";
import Form from "./Form";
import useTodos from "./useTodos";

export default function Todos() {
  const {todos, changeStatus, deleteItem, addItem} = useTodos();
  return (
    <div>
      <Form onAdd={addItem} />
      <List todos={todos} onChangeStatus={changeStatus} onDelete={deleteItem} />
    </div>
  );
}

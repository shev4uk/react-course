import React from 'react'

export default function ListItem({item, onChangeStatus, onDelete}) {
  function onClickItem() {
    onChangeStatus(item)
  }
  function onDeleteItem(e) {
    e.stopPropagation();
    onDelete(item.id);
  }
  return (
    <li onClick={onClickItem}>
        {item.title} - {''+item.completed}
        <button onClick={onDeleteItem}>Delete</button>
    </li>
  )
}

import React from 'react';
import PropTypes from 'prop-types';

function ListItem({item, onChangeStatus, onDelete}) {
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

ListItem.propTypes = {
  item: PropTypes.any.isRequired
}

export default ListItem

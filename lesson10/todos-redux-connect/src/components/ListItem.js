import PropTypes from 'prop-types'
import "./ListItem.css";

function ListItem({id, item, onUpdateTodo, onDeleteTodo}) {
    console.log(item);
  return (
    <div
      className={item.completed ? "item done" : "item"}
      key={item.id}
      onClick={() => onUpdateTodo(item)}
    >
      {item.title}
      <button onClick={(e) => {e.stopPropagation(); onDeleteTodo(item.id)}}>Delete</button>
    </div>
  );
}

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  item: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
}

export default ListItem;
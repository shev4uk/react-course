import { connect, useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todo";
import ListItem from './ListItem';

function List({todos, onUpdateTodo, onDeleteTodo}) {
  // const todos = useSelector((state) => state.todos);
  // const dispatch = useDispatch();
  // function onUpdateTodo(item) {
  //   dispatch(updateTodo(item));
  // }
  // function onDeleteTodo(id) {
  //   dispatch(deleteTodo(id));
  // }
  return (
    <div>
      {todos.map((item) => {
        return (
          <ListItem key={item.id} item={item} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} id={item.id}/>
        );
      })}
    </div>
  );
}

function mapStateToProps({todos}) {
  return {
    todos
  }
}

const mapDispatchToProps = {
  onUpdateTodo: updateTodo,
  onDeleteTodo: deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

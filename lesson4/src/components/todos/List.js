import ListItem from "./ListItem";

export default function List({ todos, onChangeStatus, onDelete }) {
  return (
    <ul>
      {todos.map((item) => {
        return <ListItem key={item.id} item={item} onChangeStatus={onChangeStatus} onDelete={onDelete} />;
      })}
    </ul>
  );
}

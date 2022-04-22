// import ListItem from "./ListItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyList({ todos, onChangeStatus, onDelete }) {
  function onDeleteItem(e, id) {
    e.stopPropagation();
    onDelete(id);
  }
  function onClickItem(item) {
    onChangeStatus(item)
  }
  return (
    <List>
      {
        todos.map((item) => {
          return (<ListItem key={item.id}>
            <ListItemButton onClick={() => onClickItem(item)} selected={item.completed}>
              <ListItemText primary={item.title} />
              <IconButton aria-label="delete" onClick={(e) => onDeleteItem(e, item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
        </ListItem>)
        })
      }
    </List>
    // <ul>
    //   {todos.map((item) => {
    //     return <ListItem key={item.id} item={item} onChangeStatus={onChangeStatus} onDelete={onDelete} />;
    //   })}
    // </ul>
  );
}
